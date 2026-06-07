import AdminPage from "@pages/admin.page";
import EmployeePage from "@pages/employee.page";
import LandingPage from "@pages/landing.page";
import LoginPage from "@pages/login.page";
import NavigatePage from "@pages/navigate.page";
import { test as base } from "@playwright/test";

type PageOption = {
    landingPage: LandingPage;
    loginPage: LoginPage;
    navigatePage: NavigatePage;
    employeePage: EmployeePage;
    adminPage: AdminPage;
};

export const test = base.extend<PageOption>({
    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    employeePage: async ({ page }, use) => {
        await use(new EmployeePage(page));
    },
    adminPage: async ({ page }, use) => {
        await use(new AdminPage(page));
    },
    navigatePage: async ({ page }, use) => {
        await use(new NavigatePage(page));
    }
});
export { expect } from "@playwright/test";
