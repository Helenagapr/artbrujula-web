import React from "react";
import About from "src/pages/about/pages/About";
import Home from "src/pages/home/pages/Home";

export type WorkspaceRoute = {
  path: string;
  element: React.ReactNode;
  children?: WorkspaceRoute[];
};

export const workspaceRoutes: Record<
  string,
  { basePath: string; routes: WorkspaceRoute[] }
> = {
    main: {
        basePath: "/",
        routes: [
            {
                path: "home", element: React.createElement(Home)
            },
            {
                path: "about", element: React.createElement(About)
            }
        ],
    },
};



