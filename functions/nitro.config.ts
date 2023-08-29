import { defineNitroConfig } from "nitropack";
import { config } from "dotenv";
import { resolve } from "path";

config({
  path: resolve(__dirname, ".env.local"),
});

config({
  path: resolve(__dirname, ".env"),
});

export default defineNitroConfig({
  preset: "firebase",
  runtimeConfig: {
    stripe: {
        pk: process.env.APP_ENV === "dev" ? process.env.STRIPE_PK : process.env.STRIPE_PK_LIVE,
        sk: process.env.APP_ENV === "dev" ? process.env.STRIPE_SK : process.env.STRIPE_SK_LIVE,
        lifetimeId: process.env.APP_ENV === "dev" ? process.env.STRIPE_LIFETIME_ID : process.env.STRIPE_LIFETIME_ID_LIVE,
    },
    isDevelopment: process.env.APP_ENV === "dev",
    serviceAccountPath:
      (process.env.APP_ENV === "dev" && process.env.SERVICE_ACCOUNT_PATH) ||
      undefined,
  },
});
