import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://sgartshop.com",
  output: "static",
  integrations: [tailwind()],
});
