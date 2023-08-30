import react from "@vitejs/plugin-react";
import * as fs from 'fs';
import * as path from 'path';
import { defineConfig } from "vite";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relative => path.resolve(appDirectory, relative);
const root = path.resolve(__dirname, resolveApp('src'));

export default defineConfig({
  base: '/',
  publicDir: 'static',
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': `${root}/`,
      '@static': `${root}/../static`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/styles/base/_functions.scss";
          @import "src/styles/base/_mixins.scss";
          @import "src/styles/base/_placeholders.scss";
          @import "src/styles/base/_media.scss";
        `,
      },
    },
    devSourcemap: true,
  },
});