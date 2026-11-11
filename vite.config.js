import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-redux-toolkit-counter-app/",
  plugins: [react()],
});
