import { localEnv } from "@env/manager";
import { expect, test } from "@fixtures/base";
import { toastMessage } from "@pages/component";
import { adminUserData } from "@ui/data/user";

test("validate admin page", { tag: "@web" }, async ({ page, loginPage, landingPage, navigatePage, employeePage, adminPage }) => {

    await loginPage.open();
    await loginPage.login(localEnv.USERNAME, localEnv.PASSWORD);

    await expect(landingPage.pageHeader).toBeVisible({ timeout: 10_000 });

    await navigatePage.goto("PIM");
    const existingUser = await employeePage.getExistingUserName();

    await navigatePage.goto("Admin");
    await adminPage.addUser(adminUserData(existingUser));
    await expect(toastMessage(page)).toHaveText("Successfully Saved");

});
