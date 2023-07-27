import { defineNitroConfig } from "nitropack";
import { config } from "dotenv";
import { resolve } from "path";

config({
  path: resolve(__dirname, ".env.local"),
});

export default defineNitroConfig({
  preset: "firebase",
  runtimeConfig: {
    isDevelopment: process.env.APP_ENV === "dev",
    serviceAccountPath:
      (process.env.APP_ENV === "dev" && process.env.SERVICE_ACCOUNT_PATH) ||
      undefined,
  },
});
