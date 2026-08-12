import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vite.dev/config/
// base './' + singlefile: o build vira um index.html autocontido (JS/CSS inline)
// que abre com duplo clique via file://, sem servidor. Mídia pesada (vídeo/logos)
// fica como arquivo relativo ao lado do HTML.
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile({ inlinePattern: ["**/*.js", "**/*.css"] }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
