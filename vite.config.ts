import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as html from "vite-plugin-html";
import path from "path";

const PORT = 8080;
const APP_TITLE = "React Test App";

export default defineConfig({
  preview: {
    port: PORT,
  },
  server: {
    open: true,
    port: PORT,
    host: true,
  },
  define: {
    process: {
      env: {},
    },
  },
  root: "./public/",
  build: {
    rollupOptions: {
      input: "./public/index.html",
    },
  },
  resolve: {
    alias: [
      {
        find: /~(.+)/,
        replacement: path.join(process.cwd(), "node_modules/$1"),
      },
      {
        find: /@\/(.+)/,
        replacement: path.join(process.cwd(), "./src/$1"),
      },
    ],
  },
  plugins: [
    react(),
    html.createHtmlPlugin({
      minify: true,
      entry: "@/main.tsx",
      template: "index.html",
      inject: {
        data: {
          title: APP_TITLE,
        },
      },
    }),
  ],
});
