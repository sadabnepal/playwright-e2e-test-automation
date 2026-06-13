import { faker } from "@faker-js/faker";
import { expect, test } from "@mobilewright/test";
import CartPage from "../pages/cart.page";
import LandingPage from "../pages/landing.page";
import ShippingPage from "../pages/shipping.page";


test.describe("Catalog", () => {

    test("app logo and title are visible on launch", async ({ screen }) => {
        const landing = new LandingPage(screen);

        await expect(landing.appLogo).toBeVisible();
        await expect(landing.appTitle).toBeVisible();
        await expect(landing.productsTitle).toBeVisible();
    });

    test("bottom menu shows Catalog, Cart and More tabs", async ({ screen }) => {
        const landing = new LandingPage(screen);

        await expect(landing.catalogLabel).toBeVisible();
        await expect(landing.cartLabel).toBeVisible();
        await expect(landing.moreLabel).toBeVisible();
    });

    test("cart is empty on fresh app launch", async ({ screen }) => {
        const landing = new LandingPage(screen);
        const cart = new CartPage(screen);

        await landing.cartTab.tap();

        await expect(cart.noItemsText).toBeVisible();
        await expect(cart.cartEmptyIcon).toBeVisible();
        await expect(cart.emptyCartMessage).toBeVisible();
        await expect(cart.goShoppingButton).toBeVisible();
    });

    test("e2e: select product, checkout with details and complete order", async ({ screen }) => {
        const landing = new LandingPage(screen);
        const cart = new CartPage(screen);

        const productName = "Sauce Labs Backpack - Black";

        await expect(landing.productByName(productName)).toBeVisible();

        await landing.productByName(productName).tap();
        await screen.getByLabel("Add To Cart").tap();

        await landing.cartTab.tap();

        await expect(screen.getByText("My Cart")).toBeVisible();
        await expect(screen.getByRole("button", { name: "Proceed To Checkout" })).toBeVisible();

        await screen.getByRole("button", { name: "Proceed To Checkout" }).tap();

        //login page validation
        await expect(screen.getByText("Login")).toBeVisible();
        await expect(screen.getByText("Select a username from the list below")).toBeVisible();

        //login with existing user
        await screen.getByRole("button", { name: "bob@example.com" }).tap();
        await screen.getByRole("button", { name: "Login" }).tap();

        //Shipping details
        await expect(screen.getByLabel("Checkout")).toBeVisible();

        const shippingDetails = {
            name: faker.person.fullName(),
            address: {
                line1: faker.location.streetAddress(),
                line2: faker.location.secondaryAddress(),
                city: faker.location.city(),
                state: faker.location.state(),
                zipCode: faker.location.zipCode(),
                country: faker.location.country()
            }
        };

        const shippingPage = new ShippingPage(screen);
        await shippingPage.fillShippingAddress(shippingDetails);

        await expect(shippingPage.toPaymentButton).toBeVisible({ timeout: 3000 });
        await shippingPage.toPaymentButton.tap();

        //checkout page
        await expect(screen.getByText("Checkout")).toBeVisible();
        await expect(screen.getByRole("button", { name: "Review Order" })).toBeVisible();

        // Cart should not be empty
        await expect(cart.noItemsText).not.toBeVisible();
        await expect(cart.cartEmptyIcon).not.toBeVisible();
    });


});