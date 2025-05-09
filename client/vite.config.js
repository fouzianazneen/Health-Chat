// // // // vite.config.js
// // // import { defineConfig } from 'vite';

// // // export default defineConfig({
// // //   // Vite configuration options
// // // });


// // // vite.config.js
// // export default defineConfig({
// //   plugins: [react()],
// //   css: {
// //     preprocessorOptions: {
// //       // optional for SCSS/LESS
// //     },
// //   },
// // });






// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
// });






import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})