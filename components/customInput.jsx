import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  width: 100%;
  border: 1px solid #d6d8e7;
  box-sizing: border-box;
  border-radius: 8px;
  height: 30px;
  font-family: Poppins;
  font-weight: bold;
  padding: 10px 10px;
  &:focus {
    outline: #c6cdfc;
  }
  &::placeholder {
    font-weight: 100;
  }
`;

const DivError = styled.div`
  background: ${(props) => (props.warning === true ? "#FEEFEF" : "#fff4ec")};
  border-radius: 8px;
  color: ${(props) => (props.warning === true ? "#DA1414" : "#cf6e23")};
  font-family: "Poppins";
  padding: 2px 10px;
  position: absolute;
  width: 100%;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  /* visibility: ${(props) => (props.error === true ? "visible" : "hidden")}; */
  opacity: ${(props) =>
    props.error === true || props.warning === true ? "1" : "0"};
`;

const CustomInput = ({
  value,
  onChange,
  placeHolder,
  icon,
  type = "text",
  error,
  labelError,
  warning,
  labelWarning,
  name = "",
  autocomplete = "",
}) => {
  return (
    <div style={{ margin: "0px 0px 35px 0px", position: "relative" }}>
      <InputStyle
        placeholder={placeHolder}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        name={name}
        autocomplete={autocomplete}
      />
      <div
        style={{
          position: "absolute",
          top: "4px",
          right: "12px",
        }}
      >
        {icon}
      </div>
      <DivError error={error} warning={warning}>
        {warning === true ? labelWarning : labelError}
      </DivError>
    </div>
  );
};
export default CustomInput;
