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
    <section title={titleSection} className={stylesHeader.initialLegent}>
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
        Registrarme
      </button>
    </section>
  );
};

export default TopInitialSection;
