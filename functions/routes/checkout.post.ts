import { readBodySafe } from "../util";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const Stripe = (await import('stripe')).Stripe;
  const stripe = new Stripe(config.stripe.sk, {apiVersion: '2023-08-16'});
  const body = await readBodySafe(event);
  const params = body.data ?? body;

  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: config.stripe.lifetimeId, quantity: 1 }],
    mode: "payment",
    customer_email: params.email,
    success_url: "http://localhost:3000/checkout-success",
    cancel_url: "http://localhost:3000/checkout-error",
  })

  return {
    data: {
      redirectUrl: session.url
    }
  }
})

