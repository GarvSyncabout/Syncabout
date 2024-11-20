import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      external: [
        "https://cdn.jsdelivr.net/npm/preline@2.5.1/dist/preline.min.js",
      ],
    },
  },
});
