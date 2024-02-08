import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { routes } from 'routing/routes';
import React from 'react';
import Layout from 'Layout/Layout';
import NotFound from 'pages/NotFound/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {Object.values(routes).map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
