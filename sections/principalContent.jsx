import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import stylesHeader from "../styles/headSection.module.scss";

const PrincipalContent = ({ children }) => {
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
            alt="Homify - Mi Renta Segura"
            width={123}
            height={36}
          />
        </div>
        <div className={stylesHeader.secondaryButton}>
          <button>Iniciar sesión</button>
          <button>Registrarme</button>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default PrincipalContent;
