import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createHistory } from "history";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import CSSModules from "react-css-modules";
import Human from "./components/human.jsx";
import Content from "./components/content.jsx";
import AppStyles from "./components/css/app.css";
import HumanStyles from "./components/css/human.css";
import Footer from "./components/page/footer.jsx";
import useLoader from "./hooks/useLoader";
import DB from "./db.json";

function App({ children }) {
  useLoader(0);

  return (
    <div id="app" className={AppStyles.app}>
      <Human>{children}</Human>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(
  <BrowserRouter basename="/de">
    <App>
      <Content />
    </App>
  </BrowserRouter>,
);
