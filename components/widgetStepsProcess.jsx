import React from "react";
import styled from "styled-components";

const CardStep = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 206px;
  min-width: 206px;
  height: 200px;
  background: #ffffff;
  box-shadow: 0px 1px 8px 6px #ebebf1;
  border-radius: 16px;
  @media screen and (max-width: 970px) {
    margin-bottom:25px;
  }
`;

const NumberStep = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
  width: 34px;
  height: 34px;
  background: #ff0282;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 56px;
  }
`;

const LabelStep = styled.label`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 40px;
  letter-spacing: 0.75px;
  color: #4e4b66;
`;

const WidgetStepProcess = ({ step, src, width, height, alt, label }) => {
  return (
    <CardStep>
      <NumberStep>
        <span>{step}</span>
      </NumberStep>
      <img src={src} width={width} height={height} alt={alt} />
      <LabelStep>{label}</LabelStep>
    </CardStep>
  );
};

export default WidgetStepProcess;
