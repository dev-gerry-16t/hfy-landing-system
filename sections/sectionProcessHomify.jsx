import React from "react";
import styled from "styled-components";

const ProcessSection = styled.section`
  padding: 4em 7em;
  margin-top: 3%;
  @media screen and (max-width: 970px) {
    padding: 4em 1em;
  }
`;

const TitleSection = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 54px;
  color: #4e4b66;
  margin: 0px;
  span {
    color: #ff0282;
  }
`;

const SubTitleSection = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 64px;
  color: #4e4b66;
  margin: 0px;
`;

const DivWidgets = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
  position: relative;
  @media screen and (max-width: 970px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 470px) {
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: column;
  }
`;

const SectionProcessHomify = ({ children }) => {
  return (
    <ProcessSection>
      <TitleSection>
        Proceso <span>Homify</span>
      </TitleSection>
      <SubTitleSection>Rápido, fácil y 100% en linea </SubTitleSection>
      <DivWidgets>{children}</DivWidgets>
    </ProcessSection>
  );
};

export default SectionProcessHomify;
