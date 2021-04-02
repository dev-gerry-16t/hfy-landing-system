import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import stylesHeader from "../styles/headSection.module.scss";
import styled from "styled-components";

const Footer = styled.footer`
  background: #ff0282;
  font-family: Poppins;
`;

const Navegation = styled.div`
  padding-top: 30px;
  text-align: center;
  margin-bottom: 5%;
`;

const Button = styled.button`
  background: none;
  border: none;
  margin: 0px;
  cursor: pointer;
  outline: none;
`;

const BottomInformation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 7rem;
  @media screen and (max-width: 970px) {
    padding: 0px 1rem;
  }
@media screen and (max-width: 470px) {
  justify-content: center;
}
`;

const PrincipalContent = ({ children, openModal }) => {
  return (
    <>
      <Head>
        <title>Homify - Mi Renta Segura</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
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
          <button
            onClick={() => {
              window.location.href = "https://app.homify.ai";
            }}
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => {
              openModal(true);
            }}
          >
            Registrarme
          </button>
        </div>
      </header>
      <main>{children}</main>
      <Footer>
        <Navegation>
          <img
            src="/logo.png"
            alt="Homify - Pólizas Jurídicas"
            width="80"
            style={{ marginBottom: 20 }}
          />
          <div className="footer-links">
            <a>About</a>
            <a>Features</a>
            <a>Pricing</a>
            <a>Careers</a>
            <a>Help</a>
            <a>Aviso de privacidad</a>
          </div>
        </Navegation>
        <BottomInformation>
          <div style={{ color: "#D9DBE1", fontSize: 12 }}>
            © 2020 Homify. All rights reserved
          </div>
          <div className='social-media'>
            <Button>
              <img src="/Instagram.png" alt="instagram" />
            </Button>
            <Button>
              <img src="/Twitter.png" alt="twitter" />
            </Button>
          </div>
        </BottomInformation>
      </Footer>
    </>
  );
};

export default PrincipalContent;
