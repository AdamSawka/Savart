import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routes } from "routing/routes";
import { map } from "lodash";
import React from "react";
import Layout from "Layout/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          {map(routes, ({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                  <Component />
              }
            />
          ))}
          </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
