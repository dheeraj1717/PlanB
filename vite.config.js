import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(
  {
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["7823-2402-8100-24ed-8c5b-a846-88bd-c87e-2b4f.ngrok-free.app"]
  }
});
