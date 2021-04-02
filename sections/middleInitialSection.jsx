import React from "react";
import stylesMiddle from "../styles/middleSection.module.scss";
import stylesCardsUser from "../styles/cardUser.module.scss";
import stylesInfoServices from "../styles/cardServices.module.scss";

const MiddleInitialSection = () => {
  return (
    <>
      <section className={stylesMiddle.middleMain}>
        <p>
          El software de gestión de inmuebles
          <br /> que <span>piensa en todos</span>
        </p>
        <label lang="es">
          Hemos tomado en cuenta cada uno de los perfiles para que siempre estén{" "}
          <br /> comunicados y tengan acceso a toda su información relevante
        </label>
      </section>
      <section className={stylesCardsUser.cards}>
        <div>
          <img
            src="/Propietario.png"
            alt="Propietario Homify"
            width={112}
            height={133}
          />
          <label lang="es">Propietario</label>
        </div>
        <div>
          <img
            src="/Inquilino.png"
            alt="Inquilino Homify"
            width={112}
            height={133}
          />
          <label>Inquilino</label>
        </div>
        <div>
          <img src="/Asesor.png" alt="Asesor Homify" width={112} height={133} />
          <label lang="es">Asesor</label>
        </div>
      </section>
      <section className={stylesMiddle.middleMain}>
        <p style={{ marginTop: "5%" }}>
          ¡<span>Todo lo que necesitas</span> para rentar, administrar y
          organizar!
        </p>
      </section>
      <div className={stylesInfoServices.contentCards}>
        <section className={stylesInfoServices.cards}>
          <div>
            <img
              src="/sinaval.png"
              alt="Renta sin aval"
              width={166}
              height={142}
            />
            <label lang="es">
              Renta<span> SIN </span>aval
            </label>
            <p>
              Puedes rentar sin aval a través de nuestra
              <strong> garantía de renta</strong>
            </p>
          </div>
          <div>
            <img
              src="/sindeposito.png"
              alt="Renta sin depósito"
              width={166}
              height={142}
            />
            <label lang="es">
              Renta<span> SIN </span>depósito
            </label>
            <p>No te descapitalices y renta sin depósito en garantía</p>
          </div>
          <div>
            <img
              src="/contarjeta.png"
              alt="Paga con tarjeta"
              width={166}
              height={142}
            />
            <label lang="es">Paga con tarjeta</label>
            <p>
              Paga con cualquier tarjeta, crédito o débito y domicilia tu renta
            </p>
          </div>
        </section>
        <section className={stylesInfoServices.cards}>
          <div>
            <img
              src="/reparaciones.png"
              alt="Solicita reparaciones"
              width={166}
              height={142}
            />
            <label lang="es">Solicita reparaciones</label>
            <p>
              Reporta a tu arrendador o recibe algún comentario de cualquier
              desperfecto en la propiedad
            </p>
          </div>
          <div>
            <img
              src="/documentos.png"
              alt="Almacena documentos"
              width={166}
              height={142}
            />
            <label lang="es">Almacena documentos</label>
            <p>
              ¡Adiós papeleo! Todos tus documentos importantes en un solo lugar
            </p>
          </div>
          <div>
            <img
              src="/servicios.png"
              alt="Paga tus servicios"
              width={166}
              height={142}
            />
            <label lang="es">Paga tus servicios</label>
            <p>Paga todos tus servicios o deudas dentro de la app</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MiddleInitialSection;
