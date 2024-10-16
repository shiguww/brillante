import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "./src") + "/"
    }
  },
  test: {
    testTimeout: 60_000 * 5,
    include: ["specs/**/*.ts"]
  }
});
