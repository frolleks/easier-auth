import { defineConfig } from "tsup";

export default defineConfig((opts) => ({
  entry: ["./server.ts"],
  format: ["esm", "cjs"],
  ignoreWatch: ["**/dist", "**/node_modules", "**/.DS_STORE", "**/.git"],
  dts: true,
  splitting: false,
  clean: !opts.watch,
}));
