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
    server: {
        host: "192.168.1.5", // To bind to all IPs, or use your IP like '192.168.1.100'
        port: 8001, // You can change the port if needed
    },
});
