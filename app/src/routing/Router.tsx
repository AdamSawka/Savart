import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routes } from "routing/routes";
import { map } from "lodash";
import React from "react";


interface Props {
  isError: boolean;
  setIsError: (isError: boolean) => void;
}

function Router({ isError, setIsError }: Props) {
  return (
    <BrowserRouter>
      <Routes>
          {map(routes, ({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                  <Component />
              }
            />
          ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
