/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Specify additional SCSS/Sass options here
        // For example, you can include global variables or mixins
        // Example: `additionalData: '@import "@/styles/variables.scss";'`
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTest.ts"],
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
