import { defineMiddleware } from "astro:middleware";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  const reqURL = new URL(context.url);
  if (reqURL.pathname === "/work") {
    return context.redirect("/redirected");
  }
  return next();
});
