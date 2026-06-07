import { expect, Page } from "@playwright/test";
import { ICreateUser } from "@ui/interface/user";
import { getDropdownLocatorByLabel, getInputLocatorByLabel } from "./component";

class AdminPage {

    constructor(private readonly page: Page) { }

    async topMenu(menuItem: "Add Employee" | "Employee List" | "Reports") {
        await this.page.getByRole("link", { name: menuItem }).click();
        await expect(this.page.getByRole("heading", { name: menuItem })).toBeVisible();
    }

    async addUser(options: ICreateUser) {
        await this.page.getByRole("button", { name: "Add" }).click();
        await expect(this.page.getByRole("heading", { name: "Add User" })).toBeVisible();

        await this.page.locator(getDropdownLocatorByLabel("User Role")).click();
        await this.page.getByRole("option", { name: options.role }).click();

        await this.page.locator(getInputLocatorByLabel("Employee Name")).fill(options.name);
        await this.page.getByText(options.name).click();

        await this.page.locator(getDropdownLocatorByLabel("Status")).click();
        await this.page.getByRole("option", { name: options.status }).click();

        await this.page.locator(getInputLocatorByLabel("Username")).fill(options.username);
        await this.page.locator(getInputLocatorByLabel("Password")).fill(options.password);
        await this.page.locator(getInputLocatorByLabel("Confirm Password")).fill(options.password);
        await this.page.getByRole("button", { name: "Save" }).click();
    }

}
export default AdminPage;