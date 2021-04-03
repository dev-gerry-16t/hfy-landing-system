import React from "react";
import SectionCityScapeLeft from "../components/sectionCItyScapeLeft";
import SectionCityScapeRight from "../components/sectionCItyScapeRight";
import stylesHeader from "../styles/headSection.module.scss";

const TopInitialSection = ({ openModal }) => {
  return (
    <section
      title="Renta sin aval y sin depósito en garantía."
      className={stylesHeader.initialLegent}
    >
      <div>
        <SectionCityScapeLeft />
        <SectionCityScapeRight />
      </div>
      <div></div>
      <p>
        Renta sin aval y sin depósito
        <br />
        en garantía.
      </p>
      <label lang="es">Ahorra hasta el 50% al mudarte</label>
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
