import { expect, Page } from "@playwright/test";
import { ICreateEmployee } from "@ui/interface/employee";
import { getInputLocatorByLabel, getTableRows } from "./component";

class EmployeePage {

    constructor(private readonly page: Page) { }

    async getExistingUserName() {
        const firstRowCells = getTableRows(this.page).first().getByRole("cell");
        const firstName = await firstRowCells.nth(2).innerText();
        const lastName = await firstRowCells.nth(3).innerText();
        return firstName.concat(" ").concat(lastName);
    }

    async addEmployee(options: ICreateEmployee) {
        await this.page.getByRole("link", { name: "Add Employee" }).click();
        await expect(this.page.getByRole("heading", { name: "Add Employee" })).toBeVisible();

        await this.page.getByPlaceholder("First Name").fill(options.employeeDetails.firstName);
        await this.page.getByPlaceholder("Middle Name").fill(options.employeeDetails.middleName);
        await this.page.getByPlaceholder("Last Name").fill(options.employeeDetails.lastName);
        await this.page.locator(getInputLocatorByLabel("Employee Id")).fill(options.employeeDetails.employeeId);

        if (options.loginDetails) {
            await this.page.locator(".oxd-switch-wrapper").click();
            await this.page.locator(getInputLocatorByLabel("Username")).fill(options.loginDetails.username);
            await this.page.locator(getInputLocatorByLabel("Password")).fill(options.loginDetails.password);
            await this.page.locator(getInputLocatorByLabel("Confirm Password")).fill(options.loginDetails.password);
            await this.page.getByText(options.loginDetails.status).click();
            await this.page.getByRole("button", { name: "Save" }).click();
        }
    }


}
export default EmployeePage;