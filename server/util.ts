import type { H3Event } from "h3";

declare module "h3" {
  interface NodeIncomingMessage {
    body: any;
  }
}

export const readBodySafe = async (event: H3Event) => {
  return await ((event.node.req.body as any) || readBody(event));
};
