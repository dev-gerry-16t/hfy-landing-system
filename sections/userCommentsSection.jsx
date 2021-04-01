import React from "react";
import stylesCustomersInfo from "../styles/cardsCustomers.module.scss";
import styled from "styled-components";
import WidgetCardComment from "../components/widgetCardComment";

const TitleComments = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 54px;
  letter-spacing: 0.75px;
  color: #4e4b66;
  margin: 0px;
`;

const UserCommentSection = () => {
  return (
    <section className={stylesCustomersInfo.commentUser}>
      <div style={{ display: "flex", padding: "35px 7em" }}>
        <svg
          width="143"
          height="120"
          viewBox="0 0 143 120"
          fill="#DDDEE9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M142.373 18.7419C121.049 29.1541 110.387 41.3882 110.387 55.4447C119.476 56.4859 126.992 60.1735 132.934 66.5076C138.877 72.8417 141.849 80.1735 141.849 88.5033C141.849 97.3536 138.965 104.816 133.197 110.889C127.428 116.963 120.175 120 111.435 120C101.647 120 93.1701 116.052 86.0037 108.156C78.8374 100.26 75.2542 90.6725 75.2542 79.3926C75.2542 45.553 94.306 19.089 132.41 0L142.373 18.7419ZM67.1186 18.7419C45.6196 29.1541 34.8702 41.3882 34.8702 55.4447C44.134 56.4859 51.7373 60.1735 57.6801 66.5076C63.6229 72.8417 66.5943 80.1735 66.5943 88.5033C66.5943 97.3536 63.6666 104.816 57.8112 110.889C51.9557 116.963 44.6584 120 35.919 120C26.1308 120 17.6973 116.052 10.6184 108.156C3.53942 100.26 0 90.6725 0 79.3926C0 45.553 18.9643 19.089 56.8935 0L67.1186 18.7419Z"
            fill="#DDDEE9"
          />
        </svg>
        <div style={{ marginLeft: 15 }}>
          <TitleComments>
            Que dicen
            <br /> de <span style={{ color: "#FF0282" }}>nosotros...</span>
          </TitleComments>
          <label>Conoce las experiencias de nuestros usuarios</label>
        </div>
      </div>
      <section className={stylesCustomersInfo.cards}>
        <WidgetCardComment
          name="Patricia"
          lastName="Rivera"
          userType="Propietaria"
          src="/patricia.png"
          text="“Mejor aplicación para la gestión del alquiler. Para llevar la gestión
       de alquileres, tanto como propietario como inquilino.”"
        />
        <WidgetCardComment
          name="Alfredo"
          lastName="Santos"
          userType="Asesor"
          src="/alfredo.png"
          text="“App integral de gestión del alquiler. Completa aplicación para
          gestionar el alquiler de inicio a fin.”"
        />
        <WidgetCardComment
          name="Roberto"
          lastName="Pérez"
          userType="Inquilino"
          src="/roberto.png"
          text="“Muy fácil de utilizar, te hace desde la declaración de la renta,
          hasta informes. Totalmente recomendable”"
        />
      </section>
    </section>
  );
};
export default UserCommentSection;
