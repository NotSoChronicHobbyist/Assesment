import { Page, expect } from '@playwright/test';

export class WebTablesPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://demoqa.com/webtables',{ waitUntil: 'domcontentloaded' });
  }

  async editFirstRow(email: string) {
    await this.page.click('#edit-record-1');
    await this.page.fill('#userEmail', email);
    console.log(`Editing first row with new email: ${email}`);
    await this.page.click('#submit');
  }

  async verifyEmail(email: string) {
    await expect(
      this.page.locator('tbody tr', { hasText: email })
        .locator('td')
        .nth(3)
       ).toHaveText(email);
    console.log(`Verified that the email in the first row is updated to: ${email}`);
}
}