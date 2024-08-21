/** @type {import('vite').UserConfig} */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mcuverse/",
  build: {
    outDir: "build",
    sourcemap: true,
    target: ["es2020"],
    chunkSizeWarningLimit: 700,
  },
});
