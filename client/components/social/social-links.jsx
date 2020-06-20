import React from "react";
import GitHub from "../assets/icons/github.js";
import LinkedIn from "../assets/icons/linkedin";
import Twitter from "../assets/icons/twitter";
import Envelope from "../assets/icons/envelope";

const socialLinks = [
  {
    title: "Github",
    link: "https://github.com/camcan",
    icon: GitHub
  },
  {
    title: "Likedin",
    link: "https://linkedin.com/in/campbellhawkes/",
    icon: LinkedIn
  },
  {
    title: "Twitter",
    link: "/404",
    icon: Twitter
  },
  {
    title: "Email",
    link: "mailto:mr.campbell.hawkes@gmail.com",
    icon: Envelope
  }
];

export default function SocialLinks({ className }) {
  return (
    <div id="socialButtons" className={className}>
      {socialLinks.map(({ title, link, icon: Icon }) => (
        <a key={title} title={title} href={link}>
          <Icon />
        </a>
      ))}
    </div>
  );
}
