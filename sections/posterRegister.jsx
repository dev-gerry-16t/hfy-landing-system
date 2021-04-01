import React from "react";

const PosterRegister = ({ openModal }) => {
  return (
    <section className="section-poster-register">
      <div className="card-info-register">
        <svg
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
        </svg>
        <svg
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
        </svg>
        <section className="section-icon-register">
          <img
            width="160"
            height="170"
            src="/payment-hand.png"
            alt="Nosotros nos preocupamos por cobrar"
          />
        </section>
        <section className="section-event-register">
          <p>Deja que nosotros nos preocupemos por cobrar</p>
          <button
            onClick={() => {
              openModal(true);
            }}
          >
            Registrarme
          </button>
        </section>
      </div>
    </section>
  );
};
export default PosterRegister;
