import { test } from '@playwright/test';
import { forms } from '../pageObjects/forms';
import students from '../data/datasets.json';
import { WebTablesPage } from '../pageObjects/webTables';
import { WidgetsPage } from '../pageObjects/widgets';

// This test suite is designed to validate the form submission 
// process using multiple datasets.
//used iteration to loop through each dataset and run the same test for each set of data,
// ensuring that the form submission works correctly for different inputs.
test.describe('Assesment for QA Engineer', () => {
  test.setTimeout(800000); 
  // added 10 minutes timeout to accommodate, enable this to avoid test failures due to slow page loading
  // slow page loading and form submission processes
  //this should not be happening on a normal scenario
  //load performance of the site should always be reported to the development team for optimization
  // wait time is added for the sake of assesment and to ensure that the tests run successfully without timing out due to slow page loading or form submission processes.

 for (const data of students) {

   test(`Submit form for ${data.firstName}`, async ({ page }) => {
     const form = new forms(page);

     await form.goto(data); //browser navigates to the URL specified in the dataset
     await form.fillForm(data); //fillout the form with the data from the dataset
     await form.dataValidation(data);//validate the submitted form data against the input data from the dataset
   }); 
 }

    // ---------------- WEB TABLES ----------------
  test('Web Tables - Edit Record', async ({ page }) => {
    const webTablesPage = new WebTablesPage(page);
    await webTablesPage.goto();
    const newEmail = 'updated@example.com';
    await webTablesPage.editFirstRow(newEmail);
    await webTablesPage.verifyEmail(newEmail);
  });

  // ---------------- WIDGETS ----------------
  test('Widgets - Select Menu', async ({ page }) => {
    const widgetsPage = new WidgetsPage(page);
    await widgetsPage.goto();
    await widgetsPage.selectValues();
  });

});