import { env } from "@env/manager";
import { expect, test } from "@playwright/test";

const loginData = {
    customer01: {
        email: "customer@practicesoftwaretesting.com",
        password: "welcome01"
    },
    customer02: {
        email: "customer2@practicesoftwaretesting.com",
        password: "welcome01"
    },
    admin: {
        email: "admin@practicesoftwaretesting.com",
        password: "welcome01"
    }
};

test("login setup for customer 01", async ({ page }) => {
    await page.goto(env.AUTH_BASED_APP_URL);
    await page.getByRole("link", { name: "Sign in" }).click();
    await page.getByRole("textbox", { name: "Email address *" }).fill(loginData.customer01.email);
    await page.getByRole("textbox", { name: "Password *" }).fill(loginData.customer01.password);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible({ timeout: 15_000 });
    await page.context().storageState({ path: "playwright/.auth/customer01.json" });
});

test("login setup for customer 02", async ({ page }) => {
    await page.goto(env.AUTH_BASED_APP_URL);
    await page.getByRole("link", { name: "Sign in" }).click();
    await page.getByRole("textbox", { name: "Email address *" }).fill(loginData.customer02.email);
    await page.getByRole("textbox", { name: "Password *" }).fill(loginData.customer02.password);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible({ timeout: 15_000 });
    await page.context().storageState({ path: "playwright/.auth/customer02.json" });
});

test("login setup for admin", async ({ page }) => {
    await page.goto(env.AUTH_BASED_APP_URL);
    await page.getByRole("link", { name: "Sign in" }).click();
    await page.getByRole("textbox", { name: "Email address *" }).fill(loginData.admin.email);
    await page.getByRole("textbox", { name: "Password *" }).fill(loginData.admin.password);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByRole("heading", { level: 1, name: "Sales over the years" })).toBeVisible({ timeout: 15_000 });
    await page.context().storageState({ path: "playwright/.auth/admin.json" });
});