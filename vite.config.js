import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/button.jsx",
      name: "CustomButton",
      fileName: (format) => `BsdkButton.${format === "es" ? "js" : "umd.cjs"}`,
      formats: ["es", "umd"], // Generate ES and UMD formats for browser/CDN
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: true, 
  },
})
