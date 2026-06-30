import { expect, Page } from "@playwright/test";
import { ICreateUser } from "@ui/interface/user";
import { getInputLocatorByLabel, selectDropdownByLabel } from "./component";

class AdminPage {

    constructor(private readonly page: Page) { }

    async topMenu(menuItem: "Add Employee" | "Employee List" | "Reports") {
        await this.page.getByRole("link", { name: menuItem }).click();
        await expect(this.page.getByRole("heading", { name: menuItem })).toBeVisible();
    }

    async addUser(options: ICreateUser) {
        await this.page.getByRole("button", { name: "Add" }).click();
        await expect(this.page.getByRole("heading", { name: "Add User" })).toBeVisible();

        await selectDropdownByLabel(this.page, "User Role", options.role);

        await getInputLocatorByLabel(this.page, "Employee Name").fill(options.name);
        await this.page.getByText(options.name).click();

        await selectDropdownByLabel(this.page, "Status", options.status);

        await getInputLocatorByLabel(this.page, "Username").fill(options.username);
        await getInputLocatorByLabel(this.page, "Password").fill(options.password);
        await getInputLocatorByLabel(this.page, "Confirm Password").fill(options.password);
        await this.page.getByRole("button", { name: "Save" }).click();
    }

}
export default AdminPage;