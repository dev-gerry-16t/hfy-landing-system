import React from "react";
import styled from "styled-components";

const CardShadow = styled.div`
  width: 90px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 1px 8px 6px rgba(255, 0, 131, 0.17);
  border-radius: 16px;
  text-align: center;
  padding-top: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const WidgetUserType = ({ user, src, onClick, id, value }) => {
  return (
    <div>
      <p
        style={{
          color: "#4E4B66",
          opacity: value === id ? "1" : "0.2",
          transition: "all 0.2s ease-out",
        }}
      >
        {user}
      </p>
      <CardShadow
        onClick={() => {
          onClick(id);
        }}
        style={{
          transform: value === id ? "scale(1.4)" : "none",
          boxShadow:
            value === id
              ? "0px 16px 20px 0px #ebebf1"
              : "0px 1px 13px 1px rgba(255, 0, 131, 0.17)",
        }}
      >
        <img src={src} alt={user} width="41" height="46" />
      </CardShadow>
    </div>
  );
};

export default WidgetUserType;
