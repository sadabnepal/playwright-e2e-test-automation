import { type Screen } from "mobilewright";

export default class CartPage {
    constructor(readonly screen: Screen) { }

    get noItemsText() { return this.screen.getByTestId("No Items") }
    get cartEmptyIcon() { return this.screen.getByTestId("CartEmpty Icons") }
    get emptyCartMessage() { return this.screen.getByText("Oh no! Your cart is empty. Fill it up with swag to complete your purchase.") }
    get goShoppingButton() { return this.screen.getByRole("button", { name: "Go Shopping" }) }
}