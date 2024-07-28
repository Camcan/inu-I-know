import { useMemo, default as React } from "react";
import { Route, Redirect, Switch, Navigate, Routes } from "react-router-dom";
import withRouter from "./withRouter";
import Who from "./who/who.jsx";
import Work from "./projects/work.jsx";
import Timeline from "./timeline/index.jsx";

const ROUTES = [
  { path: "/", element: <Navigate to="/who" /> },
  { name: "who", path: "/who", element: <Who /> },
  { name: "work", path: "/work", element: <Work /> },
  { name: "timeline", path: "/history", element: <Timeline /> },
];

function Content({ location }) {
  return (
    <Routes location={location}>
      <>
        {ROUTES.map((route) => (
          <Route {...route} />
        ))}
      </>
    </Routes>
  );
}

export default withRouter(Content);
