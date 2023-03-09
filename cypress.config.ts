import { defineConfig } from "cypress";
const { GoogleSocialLogin } = require("cypress-social-logins").plugins;

export default defineConfig({
  chromeWebSecurity: false,

  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        GoogleSocialLogin,
      });
    },
  },
});
