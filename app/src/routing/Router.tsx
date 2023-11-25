import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routes } from "routing/routes";
import React from "react";
import Layout from "Layout/Layout"
import NotFound from "pages/NotFound/NotFound";
interface Props{
    isError:boolean;
    setIsError:(value:boolean)=>void;
}

function Router({isError, setIsError}:Props) {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  {Object.values(routes).map(({ path, component: Component }) => (
                      <Route
                          key={path}
                          path={path}
                          element={<Component />}
                      />
                  ))}
              </Route>
              <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  );
}

export default Router;
