import { type Screen } from "mobilewright";

export default class LandingPage {
    constructor(readonly screen: Screen) { }

    // Header
    get appLogo() { return this.screen.getByTestId("AppLogo Icons") }
    get appTitle() { return this.screen.getByTestId("AppTitle Icons") }
    get sortButton() { return this.screen.getByRole("button", { name: "Button" }) }

    // Products heading
    get productsTitle() { return this.screen.getByTestId("title") }

    // Tab bar
    get catalogTab() { return this.screen.getByTestId("Catalog-tab-item") }
    get cartTab() { return this.screen.getByTestId("Cart-tab-item") }
    get moreTab() { return this.screen.getByTestId("More-tab-item") }

    // Tab labels
    get catalogLabel() { return this.screen.getByLabel("Catalog") }
    get cartLabel() { return this.screen.getByLabel("Cart") }
    get moreLabel() { return this.screen.getByLabel("More") }

    // Product by name
    productByName(name: string) {
        return this.screen.getByLabel(name);
    }
}