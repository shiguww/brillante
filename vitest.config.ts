import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "./src") + "/"
    }
  },
  test: {
    include: ["specs/**/*.ts"],
    testTimeout: 60 * 1000 * 10
  }
});
