import type { HandlerEvent, HandlerContext } from "@netlify/functions";

export async function handler(event: HandlerEvent, ctx: HandlerContext) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
}
