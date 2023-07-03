import { createClient } from "contentful";

const config = {
  space: "v4y17nd2y030",
  environment: "master",
  accessToken: "h2xFS2-uCqIrAtgkKv9L_YLksEiEqYoP9UvLFpR9mTY",
};
export default defineNuxtPlugin(() => {
  return {
    provide: {
      client: createClient(config),
    },
  };
});
