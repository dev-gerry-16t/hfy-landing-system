import React from "react";
import styled from "styled-components";

const WidgetUserType = ({ user, src, onClick }) => {
  const CardShadow = styled.div`
    width: 90px;
    height: 70px;
    background: #ffffff;
    box-shadow: 0px 1px 8px 6px rgba(255, 0, 131, 0.17);
    border-radius: 16px;
    text-align: center;
    padding-top: 5px;
    cursor: pointer;
  `;
  return (
    <div>
      <p style={{ color: "#4E4B66" }}>{user}</p>
      <CardShadow onClick={onClick}>
        <img src={src} alt={user} width="41" height="46" />
      </CardShadow>
    </div>
  );
};

export default WidgetUserType;
