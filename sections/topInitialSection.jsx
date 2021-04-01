import React from "react";
import stylesHeader from "../styles/headSection.module.scss";

const TopInitialSection = () => {
  return (
    <section className={stylesHeader.initialLegent}>
      <div>
        <img
          src="/cityscapeLeft.png"
          alt="city Homify"
          width={50}
          height={"100%"}
        />
        <img
          src="/cityscapeRight.png"
          alt="City Homify"
          width={50}
          height={"100%"}
        />
      </div>
      <div></div>
      <p>
        Renta sin aval y sin depósito
        <br />
        en garantía.
      </p>
      <label lang="es">Ahorra hasta el 50% al mudarte</label>
      <button>Registrarme</button>
    </section>
  );
};

export default TopInitialSection;
