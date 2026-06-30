import { localEnv } from "@env/manager";
import { expect, test } from "@fixtures/base";
import { toastMessage } from "@pages/component";
import { createEmployeeData } from "@ui/data/employee";

test("validate add employee", { tag: "@web" }, async ({ page, loginPage, landingPage, navigatePage, employeePage }) => {

    await loginPage.open();
    await loginPage.login(localEnv.USERNAME, localEnv.PASSWORD);

    await expect(landingPage.pageHeader).toBeVisible();

    await navigatePage.goto("PIM");

    await employeePage.addEmployee(createEmployeeData("Enabled"));
    await expect(toastMessage(page)).toHaveText("Successfully Saved");

});
