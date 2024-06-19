import { createDirectus, rest } from "@directus/sdk";

const directus = createDirectus(process.env.NEXT_PUBLIC_APP_TEST_URL!).with(
  rest({
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  })
);

export default directus;
