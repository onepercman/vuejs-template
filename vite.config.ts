import vue from "@vitejs/plugin-vue"
import { defineConfig, loadEnv } from "vite"
import { default as viteTsConfigPaths } from "vite-tsconfig-paths"

export default defineConfig(({ mode }) => ({
  base: loadEnv(mode, process.cwd()).VITE_PUBLIC_URL,
  plugins: [vue(), viteTsConfigPaths()],
  server: { host: true, port: 3000 },
}))
