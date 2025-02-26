import { defineConfig } from 'vite'
import replace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify('production'), // ✅ Fix process issue
      },
    }),
  ],
  build: {
    outDir: "dist/react",
    lib: {
      entry: "./index.js",
      name: "ReactComponents",
      formats: ["es", "cjs"], // ES Module and CommonJS
      fileName: (format) => `react.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Prevent bundling React itself
    },
  },
})
