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

const CustomInput = ({ value, onChange, placeHolder, icon, type = "text" }) => {
  return (
    <div style={{ margin: "0px 0px 35px 0px", position: "relative" }}>
      <InputStyle
        placeholder={placeHolder}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
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
    </div>
  );
};
export default CustomInput;
