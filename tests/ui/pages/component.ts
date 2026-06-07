import { Page } from "@playwright/test";

export const toastMessage = (page: Page) => page.locator(".oxd-text--toast-message");

export function getInputLocatorByLabel(label: string) {
    return `//label[text()='${label}']/parent::*/following-sibling::*//input`;
};

export function getDropdownLocatorByLabel(label: string) {
    return `//label[text()='${label}']/parent::div/following-sibling::*//div[contains(@class, 'select-text--after')]`;
};

export function getTableRows(page: Page) {
    return page.getByRole("table").getByRole("rowgroup").nth(1);
}
