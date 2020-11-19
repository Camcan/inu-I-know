import React, { useState, useEffect, useCallback } from "react";
import Styles from "../css/timeline.css";
import Rectangle from "../assets/shapes/rectangle.jsx";
import Circle from "../assets/shapes/circle.jsx";

const timeline = [
  {
    title: "Freelancing",
    slug: "freelance-1",
    period: "December 2017 - present",
    logo: "../img/montagnes-white.svg",
    brief: [
      "Since December 2017, I have been working on a number of personal and commercial projects. While some of my projects visible on this site, work for clients includes website builds using Next.js, Gatsby, and a variety of different CMS backends."
    ],
    description: []
  },
  {
    title: "Metamorphic Studios",
    slug: "meta",
    period: "July - November 2017",
    logo: "../img/work/meta/meta.png",
    brief: [
      "Metamorphic Development: An agile environment with a young and rapidly evolving, tight-knit team talented in storytelling, design and programming. Here "
    ],
    description: []
  },
  {
    title: "Freelance Work",
    slug: "freelance-2",
    period: "August 2016- July 2017",
    logo: "../img/montagnes-white.svg",
    brief: [
      "Throughout 2016 and early 2017 I was engaged in remote contract work in an Agile/SCRUM environment. The work was primarily around email campaigns and HTML templating for all email clients."
    ]
  },
  {
    title: "Enspiral Dev Academy",
    slug: "eda",
    period: "March - July 2016",
    logo: "../img/work/eda/eda-flag.png",
    brief: [
      "During the early part of 2016, I held a part­time position supporting the teaching team for Enspiral Dev Academy’s in-house component of the course, shaping approaches to web­development concepts while offering technical guidance as students progressed through a Node.js curriculum.",
      "The free­flowing nature of the position allowed me to take a great deal of initiative to provide the greatest value for students as they progressed through material, acting as a guide for their ‘design thinking’, and furthering their development of soft skills. This included leading mindfulness meditation sessions, pairing with students, and facilitating group discussions while maintaining traction of advancing technical knowledge."
    ]
  }
];

export default function Timeline() {
  const [initialPosition, setInitialPosition] = useState(null);
  const [selectedProject, setSelectedProject] = useState(timeline[0].slug);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    const documentRect = document
      .getElementsByClassName(Styles.container)[0]
      .getBoundingClientRect();

    setInitialPosition(documentRect);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleScroll = useCallback(() => {
    if (!initialPosition) return;
    let container = document.getElementsByClassName(Styles.container)[0];
    console.log("handleScroll", container, initialPosition);
    let offsetRatio =
      (initialPosition.top - container.getBoundingClientRect().top) /
        container.getBoundingClientRect().height +
      0.1;
    let selection = timeline[Math.round(offsetRatio * timeline.length)].slug;
    if (selection !== selectedProject) {
      setSelectedProject(selection);
    }
  }, [initialPosition]);

  return (
    <div className={Styles.timeline}>
      <div className={Styles.sidebar}>
        <div className={Styles.node_start}>
          <p>Present</p>
          <Circle radius="10" fill="white" />
        </div>
        <p className={[Styles.year, Styles.y18].join(" ")}>2018</p>
        <p className={[Styles.year, Styles.y17].join(" ")}>2017</p>
        <p className={Styles.year}>2016</p>
      </div>
      <div className={Styles.items}>
        {timeline.map(item => {
          return (
            <div
              data-slug={item.slug}
              className={[
                Styles.item,
                selectedProject == item.slug ? Styles.selected : ""
              ].join(" ")}
            >
              <div
                className={[
                  Styles.branch,
                  selectedProject == item.slug ? Styles.selectedBranch : ""
                ].join(" ")}
              >
                <p className={Styles.title}>{item.title}</p>
                <div className={Styles.node}>
                  <Circle radius="10" fill="white" />
                  <Rectangle
                    style={{
                      paddingTop: "7px",
                      paddingLeft: "5px"
                    }}
                    width={selectedProject == item.slug ? "120px" : "100px"}
                    height="6px"
                    fill="white"
                  />
                </div>
                <p className={Styles.period}>{item.period}</p>
              </div>
              <div
                className={[
                  Styles.content,
                  selectedProject == item.slug ? Styles.reveal : ""
                ].join(" ")}
              >
                <div className={Styles.logo}>
                  <img src={item.logo} />
                </div>

                <div className={Styles.brief}>
                  <p className={Styles.title}>{item.title}</p>
                  {item.brief.map(p => {
                    return <p>{p}</p>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
