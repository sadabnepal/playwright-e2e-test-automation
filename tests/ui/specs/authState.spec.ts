import { env } from "@env/manager";
import { expect, test } from "@fixtures/base";


test.describe("customer 01 tests", () => {

    test.use({ storageState: "playwright/.auth/customer01.json" });
    test("customer 01 landing page", async ({ page }) => {
        await page.goto(env.AUTH_BASED_APP_URL.concat("/account"));
        await page.getByRole("button", { name: "Profile" }).click();
        await expect(page.getByRole("textbox", { name: "Email address" })).toHaveValue("customer@practicesoftwaretesting.com", { timeout: 15_000 });
    });

});


test.describe("customer 02 tests", () => {

    test.use({ storageState: "playwright/.auth/customer02.json" });
    test("customer 02 landing page", async ({ page }) => {
        await page.goto(env.AUTH_BASED_APP_URL.concat("/account"));
        await page.getByRole("button", { name: "Profile" }).click();
        await expect(page.getByRole("textbox", { name: "Email address" })).toHaveValue("customer2@practicesoftwaretesting.com", { timeout: 15_000 });
    });

});


test.describe("admin tests", () => {

    test.use({ storageState: "playwright/.auth/admin.json" });
    test("admin landing page", async ({ page }) => {
        await page.goto(env.AUTH_BASED_APP_URL.concat("/admin/dashboard"));
        await expect(page.getByRole("heading", { level: 1, name: "Sales over the years" })).toBeVisible({ timeout: 10_000 });
    });

});