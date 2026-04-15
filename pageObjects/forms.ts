import { Page, expect } from '@playwright/test';

export class forms {
  constructor(private page: Page) { 
  }

  //this is to access the URL from the dataset, it will be called in the test file
  //this will open the web page for each dataset, 
  // allowing us to run the same test with different data sets without 
  // hardcoding the URL in the page object class.
  
  async goto(data: any) {
    await this.page.goto(data.url,{ waitUntil: 'domcontentloaded' });
    console.log(`Navigated to URL: ${data.url}`);

  }

  //this async is to fill out the form with the data from the dataset, it will be called in the test file
  //using css selectors to locate the form fields and fill them with the corresponding data from the dataset.
  //using css selectors to validate that the data displayed in the confirmation modal matches the input data, ensuring that the form submission process is working correctly for each dataset.

async fillForm(data: any) {
    await this.page.fill('#firstName', data.firstName);
    console.log(`Filled first name: ${data.firstName}`);
    await this.page.fill('#lastName', data.lastName);
    console.log(`Filled last name: ${data.lastName}`);
    await this.page.fill('#userEmail', data.email);
    console.log(`Filled email: ${data.email}`);

    await this.page.getByText(data.gender, {exact: true}).click();
    console.log(`Selected gender: ${data.gender}`);

    await this.page.fill('#userNumber', data.mobile);
    console.log(`Filled mobile number: ${data.mobile}`);

    await this.page.click('#dateOfBirthInput');
    await this.page.selectOption('.react-datepicker__month-select', { label: data.month });
    await this.page.selectOption('.react-datepicker__year-select', { label: data.year });
    await this.page.click(`.react-datepicker__day--0${data.day}:not(.react-datepicker__day--outside-month)`);
    console.log(`Selected date of birth: ${data.day} ${data.month}, ${data.year}`);

    await this.page.click('#subjectsInput');//click the subjects input to activate the dropdown
    await this.page.fill('#subjectsInput', data.subject);
    console.log(`Filled subjects: ${data.subject}`);
    await this.page.keyboard.press('Tab');

    await this.page.getByLabel(data.hobby).check();
    console.log(`Selected hobby: ${data.hobby}`);

    await this.page.locator('#uploadPicture').setInputFiles('files/sample.jpg');

    await this.page.fill('#currentAddress', data.address);
    console.log(`Filled address: ${data.address}`);

    await this.page.fill('#react-select-3-input', data.state);
    console.log(`Filled state: ${data.state}`);
    await this.page.keyboard.press('Tab');
    
    await this.page.fill('#react-select-4-input', data.city);
    console.log(`Filled city: ${data.city}`);
    await this.page.keyboard.press('Tab');

    this.submit(); // submit the form after filling it out
  }

  async submit() {
    await this.page.click('#submit');
    console.log('Form submitted');
    await expect(this.page.locator('.modal-content')).toBeVisible();
    console.log('Submission verified');  
  }

  async dataValidation(data: any) {
    await expect(this.page.locator('td:has-text("Student Name") + td')).toHaveText(`${data.firstName} ${data.lastName}`);
    await expect(this.page.locator('td:has-text("Student Email") + td')).toHaveText(data.email);
    await expect(this.page.locator('td:has-text("Gender") + td')).toHaveText(data.gender);
    await expect(this.page.locator('td:has-text("Mobile") + td')).toHaveText(data.mobile);
    await expect(this.page.locator('td:has-text("Date of Birth") + td')).toHaveText(`${data.day} ${data.month},${data.year}`);
    await expect(this.page.locator('td:has-text("Subjects") + td')).toHaveText(data.subject);
    await expect(this.page.locator('td:has-text("Hobbies") + td')).toHaveText(data.hobby);
    await expect(this.page.locator('td:has-text("Picture") + td')).toHaveText('sample.jpg');
    await expect(this.page.locator('td:has-text("Address") + td')).toHaveText(data.address);
    await expect(this.page.locator('td:has-text("State and City") + td')).toHaveText(`${data.state} ${data.city}`);
    console.log('Data validation completed successfully');
  }   



}