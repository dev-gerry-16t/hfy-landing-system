import React from "react";
import styled from "styled-components";

const PrincipalSection = styled.section`
  display: flex;
  padding: 5em 7em;

  @media screen and (max-width: 970px) {
    padding: 2em 2em;
  }
`;

const TitleSection = styled.p`
  font-family: url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 54px;
  color: #4e4b66;
  margin: 5px 0px 0px 0px;
`;

const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
`;

const DivStyleScreenshot = styled.div`
  flex: 2 1 auto;
  text-align: center;
  @media screen and (max-width: 970px) {
    flex: 1 1 auto;
    align-self: center;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const ImgScreenshot = styled.img`
  width: 500px;
  @media screen and (max-width: 970px) {
    width: 300px;
  }
`;

const DivTextScreenshot = styled.div`
  width: 370px;
  flex: 1 1 auto;
  align-self: center;
  @media screen and (max-width: 560px) {
    width: auto;
  }
`;

const ScreenshotSection = ({ openModal }) => {
  return (
    <PrincipalSection title="Ventajas de homify">
      <DivStyleScreenshot>
        <ImgScreenshot src="/screenshot.png" alt="screenshot-app-homify" />
      </DivStyleScreenshot>
      <DivTextScreenshot>
        <TitleSection>Firma electrónica</TitleSection>
        <p style={{ fontFamily: "Poppins", lineHeight: "30px" }}>
          Proceso 100% digital con la{" "}
          <strong>garantía de arrendamiento HOMIFY,</strong> dejas de lidiar con
          el papeleo y tiempos, trámite rápido y sencillo. Respuesta en menos de
          48 hrs.
        </p>
        <Button
          onClick={() => {
            openModal(true);
          }}
        >
          <span
            style={{
              fontFamily: "Poppins",
              marginRight: 5,
              color: "#FF0282",
              fontWeight: "bold",
            }}
          >
            ¡Me interesa!
          </span>
          <img src="/Vector.png" alt="Registrarme-Homify" />
        </Button>
      </DivTextScreenshot>
    </PrincipalSection>
  );
};

export default ScreenshotSection;
