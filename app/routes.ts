import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/main-menu/index.tsx"),
  route("rules", "routes/rules/index.tsx"),
] satisfies RouteConfig;
