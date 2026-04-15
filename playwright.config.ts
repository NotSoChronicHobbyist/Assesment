import { defineConfig } from '@playwright/test';

export default defineConfig({
  //added fullyParallel to run tests in parallel across multiple datasets. this is to compensate
  //for the slow loading performance of the site, allowing us to run multiple tests simultaneously
  //  and reduce overall test execution time.
  fullyParallel: true,
  workers: 4,

  use: {

    channel: 'chrome',
    headless: false,
    launchOptions: {
      slowMo: 500 // added slowmo due to slow loading performance of the site, this will slow down the test execution to allow the page to load properly and ensure that the tests run successfully without timing out due to slow page loading or form submission processes.
    }
  }
});