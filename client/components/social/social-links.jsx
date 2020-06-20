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
    link: "https://nz.linkedin.com/in/campbell-hawkes-1b557210b",
    icon: LinkedIn
  },
  {
    title: "Twitter",
    link: "https://twitter.com/letters_to_cam",
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
