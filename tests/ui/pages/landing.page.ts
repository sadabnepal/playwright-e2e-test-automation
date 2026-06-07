import { Page } from "@playwright/test";

class LandingPage {

    constructor(private readonly page: Page) { }

    get pageHeader() { return this.page.getByRole("heading", { name: "Dashboard" }) };

}
export default LandingPage;