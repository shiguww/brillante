import { defineConfig } from "rollup";
import cjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: "src/index.ts",
  output: { dir: "build", format: "cjs" },
  plugins: [typescript(), resolve(), cjs()]
});
