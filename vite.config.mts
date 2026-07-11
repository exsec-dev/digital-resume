import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { compression } from "vite-plugin-compression2";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
  plugins: [
    react(),
    tsconfigPaths(),
    compression({ algorithms: ["gzip", "brotliCompress"] }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      target: "es2022",
    },
  },
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
    open: true,
  },
  build: {
    target: "es2022",
  },
});
