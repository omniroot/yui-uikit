import path from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      lib: path.resolve(__dirname, "lib"),
    },
  },
  plugins: [react(), dts({ include: ["lib"] }), libInjectCss(), svgr()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib", "index.ts"),
      formats: ["es"],
    },
    minify: "esbuild",
    copyPublicDir: false,
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name][extname]",
      },
    },
  },
});
