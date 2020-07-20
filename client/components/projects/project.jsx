import React from "react";
import Styles from "../css/work.css";
import Links from "./projectLinks.jsx";
import Back from "../assets/icons/back.js";
import NetworkContainer from "../network/index.js";
import { Link, withRouter } from "react-router-dom";

function Project({ github, live, title, imgs, description, back }) {
  return (
    <div style={{ height: "auto" }}>
      <Link className={Styles.backButton} to="/work" onClick={back}>
        <Back />
        <span>go back</span>
      </Link>
      <div className={Styles.project}>
        <p className={Styles.projectTitle}>{title}</p>
        <Links github={github} live={live} />
        <p className={Styles.blerb}>{description[0]}</p>
        <div className={Styles.mainImageContainer}>
          <img className={Styles.mainImage} src={"../../" + imgs[1]} />
        </div>
        <div className={Styles.content}>
          <p className={Styles.descr}>{description[1]}</p>
          {imgs[2] ? (
            <img className={Styles.secondImage} src={"../../" + imgs[2]} />
          ) : null}
        </div>
        {title == "Beer?" ? <NetworkContainer /> : null}
      </div>
    </div>
  );
}
export default withRouter(Project);
