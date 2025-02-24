import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {}, 
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    lib: {
      entry: "./src/button.jsx",
      name: "CustomButton",
      fileName: (format) => `BsdkButton.${format}.js`,
      formats: ["umd"], 
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
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "./src/button.css";`, // ✅ Ensure CSS is included
        },
      },
    },
  },
})
