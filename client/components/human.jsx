import React, { Component } from "react";
import Styles from "./css/human.css";
import { router, Link, browserHistory } from "react-router";
import Nav from "./page/nav.jsx";
import GlitchText from "./assets/glitch-text.jsx";

const navStyle = Styles.nav;
const hide = Styles.hide;
export default class Human extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    glitch: false
  };

  componentDidMount() {
    this.toggleGlitch();
  }

  toggleGlitch() {
    const { glitch } = this.state;
    setTimeout(
      () => this.toggleGlitch(),
      glitch ? Math.random() * 10000 : 1000
    );
    this.setState({ glitch: !glitch });
  }

  navigate() {
    const center = document.getElementsByClassName(Styles.center)[0];
    center && center.classList.toggle(Styles.hide);
  }

  render() {
    const { glitch } = this.state;
    return (
      <div className={Styles.root}>
        <div className={Styles.head}>
          <GlitchText
            className={Styles.logoContainer}
            content={MontagnesLogo}
            glitch={glitch}
          />
          <GlitchText
            element="h1"
            content="Cam; human"
            className={Styles.title}
            glitch={glitch}
          />
          <Nav transition={this.navigate} />
        </div>
        <div className={Styles.center}>{this.props.children}</div>
      </div>
    );
  }
}

function MontagnesLogo({ className }) {
  return (
    <img
      className={`${Styles.logo} ${className}`}
      src={"../../img/montagnes-white.svg"}
    />
  );
}
