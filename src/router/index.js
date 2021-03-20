import { Route, Switch, useRouteMatch } from "react-router-dom";

import Home from "../views/Home";
import About from "../views/About";

import Navbar from "../components/Navbar";

const routes = [
  {
    path: "/",
    component: MainPage,
    routes: [
      {
        path: "/about",
        component: About,
      },
    ],
  },
];

export default function Router() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <div>
      <Route
        path={route.path}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    </div>
  );
}

function MainPage({ routes }) {
  return (
    <div className="antialiased font-sans">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}
