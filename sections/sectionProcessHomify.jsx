import React from "react";
import styled from "styled-components";

const ProcessSection = styled.section`
  padding: 4em 7em;
  margin-top: 3%;
  background: #f7f8fa;
  @media screen and (max-width: 1024px) {
    padding: 4em 2em;
  }

  @media screen and (max-width: 960px) {
    padding: 4em 1em;
  }
`;

const TitleSection = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 2.5em;
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
  font-size: 2.5em;
  line-height: 64px;
  color: #4e4b66;
  margin: 0px;
`;

const DivWidgets = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 5%;
  position: relative;
  gap: 1em;
  @media screen and (max-width: 960px) {
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
