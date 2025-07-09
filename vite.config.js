import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        jsconfigPaths(), // <-- add this here
    ],
    define: {
        "process.env": {}, // Ensures compatibility with environment variables
    },
    resolve: {
        alias: {
            crypto: "crypto-browserify", // Ensures no Node.js crypto dependency
        },
    },
});
