import React, { useState } from "react";
import Link from "next/link";
import SectionCityScapeLeft from "../components/sectionCItyScapeLeft";
import SectionCityScapeRight from "../components/sectionCItyScapeRight";
import stylesHeader from "../styles/headSection.module.scss";
import stylesCardsUser from "../styles/cardUser.module.scss";

const Button = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Entrar
    </a>
  );
});

const TopInitialYourInterest = ({ openModal }) => {
  const [selectUserType, setSelectUserType] = useState(null);

  const redirectTo = (idRedirect) => {
    let hrefTo = "/";
    switch (idRedirect) {
      case 1:
        hrefTo = "/arrendador";
        break;
      case 2:
        hrefTo = "/inquilino";
        break;
      case 3:
        hrefTo = "/asesor";
        break;
      default:
        hrefTo = "/";
        break;
    }
    return hrefTo;
  };

  return (
    <section
      title="Cuéntanos que eres"
      className={stylesHeader.initialLegentv2}
    >
      <div className={stylesHeader.sectionChild1}>
        <SectionCityScapeLeft />
        <SectionCityScapeRight />
      </div>
      <div className={stylesHeader.sectionChild2}></div>
      <p>Cuéntanos que eres...</p>
      <section
        title="Homify piensa en todos propietarios inquilinos y asesores inmobiliarios"
        className={stylesCardsUser.cards1}
      >
        <Link href="/arrendador" passHref>
          <div
            title="Arrendador"
            type={selectUserType === 1 ? "select" : "unselect"}
          >
            <img
              src="/Propietario.png"
              alt="Propietario Homify"
              width={112}
              height={133}
            />
            <label lang="es">Soy propietario</label>
          </div>
        </Link>
        <Link href="/inquilino" passHref>
          <div
            title="Arrendatario"
            type={selectUserType === 2 ? "select" : "unselect"}
          >
            <img
              src="/Inquilino.png"
              alt="Inquilino Homify"
              width={112}
              height={133}
            />
            <label>Soy inquilino</label>
          </div>
        </Link>
        <Link href="/asesor" passHref>
          <div
            title="Asesor inmobiliario"
            type={selectUserType === 3 ? "select" : "unselect"}
          >
            <img
              src="/Asesor.png"
              alt="Asesor Homify"
              width={112}
              height={133}
            />
            <label lang="es">Soy asesor</label>
          </div>
        </Link>
      </section>
    </section>
  );
};

export default TopInitialYourInterest;
