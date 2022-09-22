import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    assetsInclude: ['**/*.csv'],
    ssr: { target: "node", format: "cjs" },
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
  };
});
