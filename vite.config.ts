import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const templateName = "hairshegoes";

export default defineConfig({
  plugins: [react()],
  base: `/${templateName}/`
});
