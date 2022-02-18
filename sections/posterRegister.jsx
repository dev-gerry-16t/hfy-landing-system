import React from "react";
import styled, { keyframes } from "styled-components";

const wave = keyframes`
0% {
    transform: translate3d(10px,10px,0);
  }

  25%{
    transform: translate3d(45px,15px,0);

  }
  50% {
    transform: translate3d(85px,25px,0);
  }
  75%{
    transform: translate3d(45px,35px,0);

  }
  100%{
    transform: translate3d(10px,10px,0);

  }
`;

const wave2 = keyframes`
0% {
    transform: translate3d(10px,10px,0);
  }

  25%{
    transform: translate3d(-15px,-15px,0);

  }
  50% {
    transform: translate3d(-20px,-25px,-30px);
  }
  75%{
    transform: translate3d(-15px,-35px,0);

  }
  100%{
    transform: translate3d(10px,10px,0);

  }
`;

const Waves = styled.svg`
  path {
    animation: ${wave} linear 10s infinite;
  }
`;

const Waves2 = styled.svg`
  position: relative;
  right: -30px;
  path {
    animation: ${wave2} linear 15s infinite;
  }
`;

const PosterRegister = ({ openModal, title, titleCard, titleCard2 }) => {
  return (
    <section title={title} className="section-poster-register">
      <div className="card-info-register">
        <Waves
          width="1015"
          height="288"
          viewBox="0 0 1015 288"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="ondule-id-2"
        >
          <path
            opacity="0.15"
            d="M682.857 178.714C565.041 94.0766 402.676 214.838 274 147.857C207.049 113.007 172 -10.5 152.5 -47C141.815 -67 125.5 -85 99 -99C72.5 -113 0.142578 -106.714 0.142578 -106.714V-194.143H1384.86V351.714H1075C1075 351.714 857.714 358.714 787 308.571C725.285 264.81 743.168 222.041 682.857 178.714Z"
            fill="white"
          />
        </Waves>
        <Waves2
          width="1063"
          height="288"
          viewBox="0 0 1063 288"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="ondule-id-1"
        >
          <path
            opacity="0.15"
            d="M683.287 206.714C565.471 122.077 403.106 220.981 274.429 154C207.479 119.15 193.901 87.7019 145.858 35.7143C115.043 2.3692 112.105 -3.43581 82.858 -27.2857C53.6105 -51.1356 0.572266 -78.7142 0.572266 -78.7142V-166.143H1385.29V416.286H1054.86C1054.86 416.286 878.373 419.035 793.858 346.857C742.455 302.958 743.597 250.041 683.287 206.714Z"
            fill="white"
          />
        </Waves2>
        <section
          title="Registrarme en homify"
          className="section-event-register"
        >
          <p>
            {titleCard}
            <br />
            {titleCard2}
          </p>
          <button
            onClick={() => {
              openModal(true);
            }}
          >
            Contáctame
          </button>
        </section>
        <section className="section-icon-register">
          <img
            width="145"
            height="170"
            src="/homify-poster.png"
            alt="Nosotros nos preocupamos por cobrar"
          />
        </section>
      </div>
    </section>
  );
};
export default PosterRegister;
