import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist/webcomponent",
    lib: {
      entry: "./webcomponents.js",
      name: "WebComponents",
      formats: ["es", "cjs"], // ES Module and CommonJS
      fileName: (format) => `webcomponents.${format}.js`,
    },
  },
});
