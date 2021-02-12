import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import stylesHeader from "../styles/headSection.module.scss";
import stylesMiddle from "../styles/middleSection.module.scss";
import stylesCardsUser from "../styles/cardUser.module.scss";
import stylesInfoServices from "../styles/cardServices.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={stylesHeader.header}>
        <div>
          <img
            src="https://homify-docs-users.s3.us-east-2.amazonaws.com/8A7198C9-AE07-4ADD-AF34-60E84758296D.jpg"
            alt="homify"
          />
        </div>
        <div className={stylesHeader.secondaryButton}>
          <button>Iniciar sesión</button>
          <button>Registrarme</button>
        </div>
      </header>
      <main>
        <section className={stylesHeader.initialLegent}>
          <div>
            <img
              src="/cityscapeLeft.png"
              alt="image-left"
              width={50}
              height={"100%"}
            />
            <img
              src="/cityscapeRight.png"
              alt="image-left"
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
          <label>Ahorra hasta el 50% al mudarte</label>
          <button>Registrarme</button>
        </section>
        <section className={stylesMiddle.middleMain}>
          <p>
            El software de gestión de inmuebles
            <br /> que <span>piensa en todos</span>
          </p>
          <label>
            Hemos tomado en cuenta cada uno de los perfiles para que siempre
            esten <br /> comunicados y tengan acceso a toda su información
            relevante
          </label>
        </section>
        <section className={stylesCardsUser.cards}>
          <div>
            <img
              src="/Propietario.png"
              alt="image-left"
              width={112}
              height={133}
            />
            <label>Propietario</label>
          </div>
          <div>
            <img
              src="/Inquilino.png"
              alt="image-left"
              width={112}
              height={133}
            />
            <label>Inquilino</label>
          </div>
          <div>
            <img src="/Asesor.png" alt="image-left" width={112} height={133} />
            <label>Asesor</label>
          </div>
        </section>
        <section className={stylesMiddle.middleMain}>
          <p style={{ marginTop: "5%" }}>
            ¡<span>Todo lo que necesitas</span> para rentar, administrar y
            organizar!
          </p>
        </section>
        <section className={stylesInfoServices.cards}>
          <div>
            <img src="/sinaval.png" alt="image-left" width={166} height={142} />
            <label>
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
              alt="image-left"
              width={166}
              height={142}
            />
            <label>
              Renta<span> SIN </span>depósito
            </label>
            <p>No te descapitalices y renta sin depósito en garantía</p>
          </div>
          <div>
            <img
              src="/contarjeta.png"
              alt="image-left"
              width={166}
              height={142}
            />
            <label>Paga con tarjeta</label>
            <p>
              Paga con cualquier tarjeta, crédito o débito y domicilia tu renta
            </p>
          </div>
        </section>
        <section className={stylesInfoServices.cards}>
          <div>
            <img src="/reparaciones.png" alt="image-left" width={166} height={142} />
            <label>Solicita reparaciones</label>
            <p>
              Reporta a tu arrendador o recibe algun comentario de cualquier
              desperfecto en la propiedad
            </p>
          </div>
          <div>
            <img
              src="/documentos.png"
              alt="image-left"
              width={166}
              height={142}
            />
            <label>Almacena documentos</label>
            <p>
              ¡Adios papeleo! Todos tus documentos importantes en un solo lugar
            </p>
          </div>
          <div>
            <img
              src="/servicios.png"
              alt="image-left"
              width={166}
              height={142}
            />
            <label>Paga tus servicios</label>
            <p>Paga todos tus servicios o deudas dentro de la app</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>Hola 2</footer>
    </div>
  );
};

export default Home;
