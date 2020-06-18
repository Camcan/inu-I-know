import React from "react";
import Styles from "../css/glitch.css";

GlitchText.defaultProps = {
  glitch: true
};

export default function GlitchText({
  content,
  element,
  onHover,
  className = "",
  glitch
}) {
  const Element = element || "div";
  const glitchClass = glitch
    ? Styles[onHover ? "glitchOnHover" : "glitch"]
    : undefined;

  if (typeof content === "string") {
    const glitchTextClass = glitch
      ? `${glitchClass} ${Styles.glitchText}`
      : undefined;
    return (
      <Element
        className={`${glitchTextClass} ${className}`}
        data-text={content}
      >
        {content}
      </Element>
    );
  }

  const Component = content;

  return (
    <Element className={className}>
      <Component className={glitchClass} />
      {glitch && <Component className={Styles.glitchShadow} />}
    </Element>
  );
}
