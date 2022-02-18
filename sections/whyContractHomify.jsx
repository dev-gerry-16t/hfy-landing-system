import React from "react";
import WidgetInfo from "../components/widgetInfo";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  margin-bottom: 5%;
  justify-content: space-around;
  @media screen and (max-width: 470px) {
    flex-direction: column;
  }
`;

const LabelQuestion = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 64px;
  color: #4e4b66;
  padding: 0px 7rem;

  @media screen and (max-width: 970px) {
    padding: 0px 15px;
  }
`;

const PrincipalSection = styled.section`
  padding: 1em 8%;
  background: #f7f8fa;
  @media screen and (max-width: 970px) {
    padding: 0px 0px;
  }
`;

const WhyContractHomify = () => {
  return (
    <PrincipalSection title="Por que contratar homify">
      <div>
        <LabelQuestion>
          ¿Por qué contratar <br />
          <span style={{ color: "#FF0282", fontWeight: "bolder" }}>Homify</span>
          ?
        </LabelQuestion>
      </div>
      <div>
        <Flex>
          <WidgetInfo
            src="/01.png"
            title="Incrementa tus ingresos."
            text="Con los beneficios Homify, no solo ayudamos a tus clientes a tener mejores condiciones y beneficios, si no a ti como asesor, te ayudamos a generar más ingresos e incrementar tu cartera de clientes."
          />
          <WidgetInfo
            src="/04.png"
            title="Investigación y aprobación en 24 hrs."
            text="Sabemos que tu tiempo y el de tus clientes es muy importante, por eso nuestros tiempos de respuesta son muy bajos. Pero con la misma calidad y seguridad para tus clientes."
          />
        </Flex>
        <Flex>
          <WidgetInfo
            src="/011.png"
            title="Administra tu cartera y/o nuevos clientes"
            text="Desarrollamos una plataforma en la que administrar tus clientes y seguimientos, será muy sencillo y practico, así como brindarte muchos herramientas y beneficios para captar nuevos clientes."
          />
          <WidgetInfo
            src="/07.png"
            title="Cartera Homify"
            text="De nuestra cartera de clientes que busquen tus servicios, podrás gestionar y administrar nuevos clientes para ti y administrarlos en la app para mejor control."
          />
        </Flex>
      </div>
    </PrincipalSection>
  );
};

export default WhyContractHomify;
