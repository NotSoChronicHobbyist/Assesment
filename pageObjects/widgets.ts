import { expect, Page } from '@playwright/test';

export class WidgetsPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://demoqa.com/select-menu',{ waitUntil: 'domcontentloaded' });
  }

  async selectValues() {
    // Standard value
    await this.page.click('#withOptGroup');
    await this.page.getByText('Group 1, option 2').click();
    await expect(this.page.getByText('Group 1, option 2', { exact: true })).toBeVisible();
    console.log('Selected Group 1, option 2 from standard value');

    // Select one
    await this.page.click('#selectOne');
    await this.page.getByText('Ms.').click();
    await expect(this.page.getByText('Ms.', { exact: true })).toBeVisible();
    console.log('Selected Ms. from select one');

    // Old style select
    await this.page.click('#oldSelectMenu');
    await this.page.locator('#oldSelectMenu').selectOption('Purple');
    const value = await this.page.locator('#oldSelectMenu')
    .evaluate((el: HTMLInputElement) => el.value);
    expect(value).toBe('4'); // 'Purple' corresponds to value '4' in the old select menu
    console.log('Selected old style select: Purple');

    // Multi select dropdown   
    await this.page.click('#react-select-4-input');
    await this.page.locator('#react-select-4-option-1').click();
    await expect(this.page.locator('//div[text()="Blue"]')).toBeVisible();
    console.log('Filled color: Blue');
    await this.page.keyboard.press('Escape'); // Close the dropdown after selection

    //multi select dropdown
    await this.page.click('#cars');
    await this.page.getByText('Volvo', { exact: true }).click();
    await expect(this.page.getByText('Volvo', { exact: true })).toBeVisible();
    console.log('Selected Volvo from multi select dropdown');


  }
}