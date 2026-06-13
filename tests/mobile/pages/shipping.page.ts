import { type Screen } from "mobilewright";

export default class ShippingPage {
    constructor(readonly screen: Screen) { }

    get pageTitle() { return this.screen.getByTestId("Checkout") }
    get pageSubtitle() { return this.screen.getByTestId("Enter a shipping address") }

    private get fullNameField() { return this.screen.getByPlaceholder("Rebecca Winter") }
    private get addressLine1Field() { return this.screen.getByPlaceholder("Mandorley 112") }
    private get addressLine2Field() { return this.screen.getByPlaceholder("Entrance 1") }
    private get cityField() { return this.screen.getByPlaceholder("Truro") }
    private get stateField() { return this.screen.getByPlaceholder("Cornwall") }
    private get zipCodeField() { return this.screen.getByPlaceholder("89750") }
    private get countryField() { return this.screen.getByPlaceholder("United Kingdom") }

    get toPaymentButton() { return this.screen.getByRole("button", { name: "To Payment" }) }

    async fillShippingAddress(details: {
        name: string
        address: {
            line1: string
            line2: string
            city: string
            state: string
            zipCode: string
            country: string
        }
    }) {
        await this.fullNameField.fill(details.name);
        await this.addressLine1Field.fill(details.address.line1);
        await this.addressLine2Field.fill(details.address.line2);

        await this.cityField.fill(details.address.city);
        await this.stateField.fill(details.address.state);
        await this.zipCodeField.fill(details.address.zipCode);
        await this.countryField.fill(details.address.country);

    }
}