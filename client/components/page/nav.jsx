import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Styles from "../css/nav.css";
import Back from "../assets/icons/back.js";
import GlitchText from "../assets/glitch-text.jsx";
import withRouter from "../withRouter";

var navStyle = Styles.nav;
var hide = Styles.hide;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      document.getElementById("nav").className = navStyle + " highlight";
    }, 2000);
  }
  onClick(e) {
    window.scroll(0, 0);
  }
  render() {
    if (this.props.home == true) {
      return (
        <div id="nav" className={hide}>
          <Link to="/home">
            back home
            <Back />
          </Link>
        </div>
      );
    } else {
      return (
        <div id="nav" className={hide}>
          <NavLink onClick={this.onClick} to="/who" replace={false}>
            <GlitchText onHover content="who?" />
          </NavLink>
          <NavLink onClick={this.onClick} to="/work" replace={false}>
            <GlitchText onHover content="projects" />
          </NavLink>
          <NavLink onClick={this.onClick} to="/history" replace={false}>
            <GlitchText onHover content="history" />
          </NavLink>
        </div>
      );
    }
  }
}
export default withRouter(Nav);
