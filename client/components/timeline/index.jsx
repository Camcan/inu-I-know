import React, { Component } from "react";
import Styles from "../css/timeline.css";

import Timeline from "./timeline.jsx";

export default class TimelineContainer extends Component {
  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.pageTitle}>
          <h3>Timeline</h3>
        </div>
        <Timeline />
      </div>
    );
  }
}
