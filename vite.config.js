import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// สร้างฟังก์ชันสำหรับตรวจสอบ environment
const getBase = (mode) => {
  if (mode === "production") {
    return "/SutUbuddy/";
  }
  return "/";
};

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: getBase(mode),
}));
