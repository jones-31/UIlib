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
  // define: {
  //   "process.env": {}, 
  //   "process.env.NODE_ENV": JSON.stringify("production"),
  // },
  build: {
    lib: {
      entry: "./index.js",
      name: "BsdkUILibrary",
      fileName: (format) => `bsdkui-library.${format}.js`,
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
  },
})
