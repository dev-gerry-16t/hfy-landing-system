import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f4f5f7;
`;

const Card = styled.div`
  width: 440px;
  display: flex;
`;

const Subject = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #4e4b66;
  margin: 0px;
`;

const BodyText = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  color: #4e4b66;
`;

const WidgetInfo = ({ src, title, text }) => {
  return (
    <Card>
      <div style={{ marginRight: 25 }}>
        <Circle>
          <img src={src} alt={title} width="24" height="24" />
        </Circle>
      </div>
      <div>
        <Subject>{title}</Subject>
        <BodyText>{text}</BodyText>
      </div>
    </Card>
  );
};

export default WidgetInfo;
