import React from "react";
import styled from "styled-components";

const TitleSection = styled.p`
  font-family: url(https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap);
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
`;

const ScreenshotSection = () => {
  return (
    <section style={{ display: "flex", padding: "5em 7em" }}>
      <div
        style={{
          flex: "2 1 auto",
          textAlign: "center",
        }}
      >
        <img width="500" src="/screenshot.png" alt="screenshot-app-homify" />
      </div>
      <div style={{ width: 370, flex: "1 1 auto", alignSelf: "center" }}>
        <TitleSection>Firma electrónica</TitleSection>
        <p style={{ fontFamily: "Poppins", lineHeight: "30px" }}>
          Al contratar una
          <strong> Póliza Jurídica de Arrendamiento Renta Segura</strong> dejas
          de lidiar con tu inquilino y nosotros nos encargamos de la cobranza
          para que tu renta siempre este a tiempo.
        </p>
        <Button>
          <span
            style={{
              fontFamily: "Poppins",
              marginRight: 5,
              color: "#FF0282",
              fontWeight: 'bold',
            }}
          >
            Registrarme
          </span>
          <img src="/Vector.png" alt="Registrarme-Homify" />
        </Button>
      </div>
    </section>
  );
};

export default ScreenshotSection;
