import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [],
  envDir:'.',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
