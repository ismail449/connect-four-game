import { unstable_reactRouterRSC as reactRouterRSC } from "@react-router/dev/vite";
import rsc from "@vitejs/plugin-rsc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [reactRouterRSC(), rsc(), svgr()],
  resolve: {
    tsconfigPaths: true,
  },
});
