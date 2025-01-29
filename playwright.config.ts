import { defineConfig, devices } from '@playwright/test';
// import * as dotenv from 'dotenv';
// dotenv.config();

import dotenv from 'dotenv';
import path from 'path';

// Load Environment variables base on the .env file
const ENV = process.env.ENV || 'dev'; // default to staging
dotenv.config({ path: `.env.${ENV}` });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL, // Uses staging by default
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },

  projects: [
    // Webdrivers configuration
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
  ],
});
