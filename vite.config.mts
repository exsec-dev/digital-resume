import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { compression } from "vite-plugin-compression2";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    compression({ algorithms: ["gzip", "brotliCompress"] }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ["src"],
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: "http://localhost:3000",
  },
  build: {
    target: "es2022",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("/node_modules/react/") ||
            id.includes("/node_modules/react-dom/") ||
            id.includes("/node_modules/scheduler/")
          ) {
            return "react-vendor";
          }

          if (
            id.includes("/node_modules/i18next") ||
            id.includes("/node_modules/react-i18next/") ||
            id.includes("/node_modules/i18next-browser-languagedetector/")
          ) {
            return "i18n";
          }

          if (
            id.includes("/node_modules/antd/") ||
            id.includes("/node_modules/@ant-design/") ||
            id.includes("/node_modules/rc-")
          ) {
            return "antd";
          }
        },
      },
    },
  },
});
