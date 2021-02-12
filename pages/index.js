import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import stylesHeader from "../styles/headSection.module.scss";
import stylesMiddle from "../styles/middleSection.module.scss";
import stylesCardsUser from "../styles/cardUser.module.scss";
import stylesInfoServices from "../styles/cardServices.module.scss";
import stylesCustomersInfo from "../styles/cardsCustomers.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homify - Mi Renta Segura</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=1"
        ></meta>
        <meta
          name="Description"
          content="Póliza Jurídica De Arrendamiento - Tu Renta Segura"
        ></meta>
      </Head>
      <header className={stylesHeader.header}>
        <div>
          <img
            src="https://homify-docs-users.s3.us-east-2.amazonaws.com/8A7198C9-AE07-4ADD-AF34-60E84758296D.jpg"
            alt="homify"
            width={123}
            height={36}
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
          <label lang="es">Ahorra hasta el 50% al mudarte</label>
          <button>Registrarme</button>
        </section>
        <section className={stylesMiddle.middleMain}>
          <p>
            El software de gestión de inmuebles
            <br /> que <span>piensa en todos</span>
          </p>
          <label lang="es">
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
            <label lang="es">Propietario</label>
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
            <label lang="es">Asesor</label>
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
            <img src="/sinaval.png" alt="Sin aval" width={166} height={142} />
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
              alt="sin depósito"
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
              alt="con tarjeta"
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
              alt="reparaciones"
              width={166}
              height={142}
            />
            <label lang="es">Solicita reparaciones</label>
            <p>
              Reporta a tu arrendador o recibe algun comentario de cualquier
              desperfecto en la propiedad
            </p>
          </div>
          <div>
            <img
              src="/documentos.png"
              alt="documentos"
              width={166}
              height={142}
            />
            <label lang="es">Almacena documentos</label>
            <p>
              ¡Adios papeleo! Todos tus documentos importantes en un solo lugar
            </p>
          </div>
          <div>
            <img
              src="/servicios.png"
              alt="paga tus servicios"
              width={166}
              height={142}
            />
            <label lang="es">Paga tus servicios</label>
            <p>Paga todos tus servicios o deudas dentro de la app</p>
          </div>
        </section>
        <section className={stylesCustomersInfo.commentUser}>
          <p style={{ marginTop: "2%" }}>
            Que dicen de <span>nosotros...</span>
          </p>
          <label>Conoce las experiencias de nuestros usuarios</label>
          <section className={stylesCustomersInfo.cards}>
            <div title="usuarios">
              <section title="info-usuario-homify">
                <img src="/patricia.png" width={80} height={80} alt="usuario" />
                <div>
                  <p>
                    Patricia
                    <br />
                    Rivera
                  </p>
                  <label title="tipo-de-usuario" lang="es">
                    Propietaria
                  </label>
                </div>
              </section>
              <label title="comentario" lang="es">
                “Mejor aplicación para la gestión del alquiler. Para llevar la
                gestión de alquileres, tanto como propietario como inquilino.”
              </label>
            </div>
            <div title="usuarios">
              <section title="info-usuario-homify">
                <img src="/alfredo.png" width={80} height={80} alt="usuario" />
                <div>
                  <p>
                    Alfredo
                    <br />
                    Santos
                  </p>
                  <label title="tipo-de-usuario" lang="es">
                    Asesor
                  </label>
                </div>
              </section>
              <label title="comentario" lang="es">
                "App integral de gestión del alquiler. Completa aplicación para
                gestionar el alquiler de inicio a fin."
              </label>
            </div>
            <div title="usuarios">
              <section title="info-usuario-homify">
                <img src="/roberto.png" width={80} height={80} alt="usuario" />
                <div>
                  <p>
                    Roberto
                    <br />
                    Perez
                  </p>
                  <label title="tipo-de-usuario" lang="es">
                    Inquilino
                  </label>
                </div>
              </section>
              <label title="comentario" lang="es">
                “Muy fácil de utilizar, te hace desde la declaración de la
                renta, hasta informes. Totalmente recomendable”
              </label>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Home;
