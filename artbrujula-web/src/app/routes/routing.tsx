import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import { workspaceRoutes, WorkspaceRoute } from "./workspacesRoutes";

function renderRoute(route: WorkspaceRoute, basePath = "") {
  const fullPath = `${basePath}${route.path ? `/${route.path}` : ""}`;

  return (
    <Route key={fullPath} path={fullPath} element={route.element}>
      {route.children?.map((child) => renderRoute(child, fullPath))}
    </Route>
  );
}
export default function Routing() {
  const workspaceConfig = workspaceRoutes["main"];

  if (!workspaceConfig) {
    return <Navigate to="/error/404" replace />;
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />

        {workspaceConfig.routes.map((route) =>
          renderRoute(route, workspaceConfig.basePath)
        )}

        <Route path="*" element={<Navigate to="/error/404" replace />} />
      </Route>
    </Routes>
  );
}
