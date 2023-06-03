import { defineConfig } from "cypress";
import * as dotenv from 'dotenv';

dotenv.config()

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    env: {
      APIKEY: process.env.MYAPIKEY
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
