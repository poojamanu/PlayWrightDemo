// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,  //default 30*1000 chnaged to 40
  expect: {
    timeout: 50 * 1000
  },
  /* retry on failure  */
  retries: 1,
  //how many workers should run at a time
 // workers: 3,
  //to do parallel run
  fullyParallel: true,
  /* Reporter to use */

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */


  projects: [
    {
      name: 'Chrome Project',
      use: {

        headless: false,
        screenshot: 'only-on-failure',
        video: "retain-on-failure",

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'retain-on-failure',
        browserName:'chromium'


      },
    },
    {
      name: 'firefox Project',
      use: {

        headless: false,
        screenshot: 'only-on-failure',
        video: "retain-on-failure",

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'retain-on-failure',
        browserName:'firefox'


      }
    },

    {
      name: 'webkit Project',
      use: {

        headless: false,
        screenshot: 'only-on-failure',
        video: "retain-on-failure",

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'retain-on-failure',
        browserName:'webkit'


      }
    }
  ]

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

