import React from "react";
import SectionCityScapeLeft from "../components/sectionCItyScapeLeft";
import SectionCityScapeRight from "../components/sectionCItyScapeRight";
import stylesHeader from "../styles/headSection.module.scss";

const TopInitialSection = ({
  openModal,
  title1,
  title2,
  subTitle,
  titleSection,
}) => {
  return (
    <section
      title={titleSection}
      className={stylesHeader.initialLegent}
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,1) 1%, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 59%)",
      }}
    >
      <div>
        <SectionCityScapeLeft />
        <SectionCityScapeRight />
      </div>
      <div></div>
      <p>
        {title1}
        <br />
        {title2}
      </p>
      <label lang="es">{subTitle}</label>
      <button
        onClick={() => {
          openModal(true);
        }}
      >
        <strong style={{ letterSpacing: 2 }}>Contáctame</strong>
      </button>
    </section>
  );
};

export default TopInitialSection;
