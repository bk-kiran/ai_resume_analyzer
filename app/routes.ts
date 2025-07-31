import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/auth', 'routes/auth.tsx'),
    route('/upload', 'routes/update.tsx'),
    route('/feedback/:id', 'routes/feedback.tsx'),
    route('/wipe', 'routes/wipe.tsx')
] satisfies RouteConfig;

