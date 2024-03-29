import { Container } from "@mui/material";
import React, { useContext } from "react";
import codings from "../../../assets/lottie/coding.json";
import { ThemeContext } from "../../../contexts/theme-context";
import { aboutData } from "../../../data/aboutData";
import AnimationLottie from "../../helper/animation-lottie";
import "./about.css";

function About() {
  const { theme, language } = useContext(ThemeContext);
  return (
    <div className="about-container" style={{ backgroundColor: theme.secondary }}>
      <Container className="about" id="about">
        <div className="line-styling">
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-line"
            style={{ backgroundColor: theme.primary }}
          ></div>
        </div>
        <div className="about-body">
          <div className="about-description">
            <h2 style={{ color: theme.primary }}>
              {aboutData.title[language]}
            </h2>
            <p style={{ color: theme.tertiary }}>
              {aboutData.description1[language]}
              <br />
              <br />
              {aboutData.description2[language]}
              <br />
              <br />
              {aboutData.description3[language]}
              <br />
              <br />
              {aboutData.description4[language]}
              <br />
              <br />
              {aboutData.description5[language]}
            </p>
          </div>
          <div className="about-animation">
            <AnimationLottie animationPath={codings} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
