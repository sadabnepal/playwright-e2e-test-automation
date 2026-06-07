import { expect, Page } from "@playwright/test";
import { OrangeHrmAppMenu } from "@ui/interface/menu";

class NavigatePage {

    constructor(private readonly page: Page) { };

    async goto(menuItem: OrangeHrmAppMenu) {
        await this.page.getByRole("link", { name: menuItem }).click();
        await expect(this.page.getByRole("heading", { name: menuItem })).toBeVisible();
    }

}
export default NavigatePage;