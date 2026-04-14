import { defineConfig } from '@playwright/test';

export default defineConfig({

  use: {
    channel: 'chrome',
    headless: false
  }
});