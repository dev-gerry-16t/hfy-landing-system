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

  @media screen and (max-width: 970px) {
    padding: 0px 15px;
  }
`;

const PrincipalSection = styled.section`
  padding: "0px 8%";

  @media screen and (max-width: 970px) {
    padding: "0px 0px";
  }
`;

const WhyContractHomify = () => {
  return (
    <PrincipalSection>
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
            title="Líderes en el mercado"
            text="Somos una firma especializada en el ramo jurídico inmobiliario con mas
          de 20 años de experiencia, nuestros productos son innovadores y únicos
          en el mercado."
          />
          <WidgetInfo
            src="/04.png"
            title="Procesos"
            text="Procesos automatizados y revisión manual a través de una mesa de control interna para tener siempre la seguridad que nuestro contrato no tiene huecos legales"
          />
        </Flex>
        <Flex>
          <WidgetInfo
            src="/011.png"
            title="Tecnología"
            text="Utilizamos tecnología y sistemas tradicionales para la investigación del inquilino, lo que nos permite tener una respuesta rápida y ágil que nuestros competidores."
          />
          <WidgetInfo
            src="/07.png"
            title="Sin gastos ocultos"
            text="Una vez hecho el pago de tu póliza jurídica no tienes que pagar nada, todos los gastos corren por parte de Homify, estamos tan seguros de nuestro producto que si tu inquilino no paga, "
          />
        </Flex>
      </div>
    </PrincipalSection>
  );
};

export default WhyContractHomify;
