import { createClient } from "contentful";
import contentful from "contentful";

// const config = {
//   space: "v4y17nd2y030",
//   environment: "master",
//   accessToken: "h2xFS2-uCqIrAtgkKv9L_YLksEiEqYoP9UvLFpR9mTY",
// };
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  //  {createClient} only works in local env
  const createClientFunc =
    process.env.NODE_ENV !== "production"
      ? createClient
      : contentful.createClient;

  const client = createClientFunc({
    space: config.public.contentfulSpace,
    environment: "master",
    accessToken: config.public.contentfulToken,
  });

  return {
    provide: {
      client,
    },
  };
});
