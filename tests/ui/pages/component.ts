import { Page } from "@playwright/test";

export const toastMessage = (page: Page) => page.locator(".oxd-text--toast-message");

export function getInputLocatorByLabel(page: Page, label: string) {
    return page.locator("div")
        .filter({ hasText: new RegExp(`^${label}$`) })
        .locator("input");
};

function getDropdownLocatorByLabel(label: string) {
    return `//label[text()='${label}']/parent::div/following-sibling::*//div[contains(@class, 'select-text--after')]`;
};

export async function selectDropdownByLabel(page: Page, label: string, value: string) {
    await page.locator(getDropdownLocatorByLabel(label)).click();
    await page.getByRole("option", { name: value }).click();
}

export function getTableRows(page: Page) {
    return page.getByRole("table").getByRole("rowgroup").nth(1);
}
