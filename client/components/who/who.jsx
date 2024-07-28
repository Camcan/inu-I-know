import React from "react";
import Social from "../social/social-links.jsx";
import Styles from "../css/who.css";

export default function Who() {
  return (
    <div className={Styles.fadeIn}>
      <h2>who?</h2>
      <div className={Styles.whoCol}>
        <div className={[Styles.profileImg, Styles.mobile].join(" ")}></div>
        <p>Cam [Campbell Hawkes]</p>
        <p>Security minded developer</p>
        <p>
          I enjoy finding elegant solutions to complex problems & exploring
          states of flow.
        </p>
        <p>
          Normally based in Sydney & otherwise found in the Southern Alps of New
          Zealand.
        </p>
        <Social className={Styles.socialButtons} />
      </div>
      <div className={[Styles.profileImg, Styles.desktop].join(" ")}></div>
    </div>
  );
}
