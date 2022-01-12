import React, { useContext } from "react";
import styled from "styled-components";
import { Container } from "../styles/styleProperty";
import IconBathroom from "../assets/svg/iconBathroom.svg";
import IconBed from "../assets/svg/arrowRight2.svg";
import IconCar from "../assets/svg/arrowLeft2.svg";
import IconHalfBathroom from "../assets/svg/arrowRight2.svg";

const ContentFeatures = styled(Container)`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  .container-features {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    justify-content: space-between;
    .card-amenity {
      display: flex;
      justify-content: space-around;
      flex: 1 1 auto;
    }
  }
  hr {
    border: 0.5px solid #e5e5e5;
    opacity: 0.3;
    width: 100%;
    margin: 2em 0px;
  }
  .container-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    justify-content: space-between;
    .card-amenity {
      display: flex;
      justify-content: space-around;
      flex: 1 1 auto;
    }
    .card-content {
      padding: 0.7em;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #ffffff;
      box-shadow: 0px 1px 8px 6px #ebebf1;
      border-radius: 1em;
      width: 200px;
      span {
        font-weight: bold;
        color: #ff0282;
      }
      label {
        color: #4e4b66;
        font-size: 0.7em;
      }
    }
  }

  @media screen and (max-width: 1500px) {
    .container-features {
      display: flex;
      .card-amenity {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;
      }
    }
    .container-cards {
      display: flex;
      .card-amenity {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;
      }
    }
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
  }

  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
`;

const CardAmenity = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 1px 8px 6px #ebebf1;
  border-radius: 1em;
  padding: 0.8em;
  width: 235px;
  .circle-content {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background: #ff0282;
    }
  }
  .info-amenity {
    flex: 1 1 auto;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      margin: 0;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 360px) {
    width: 100%;
    padding: 0.8em 5px;
  }
`;

const SectionFeatures = ({ publicProperty = false, dataDetail }) => {
  const {
    totalBathrooms,
    totalBedrooms,
    totalParkingSpots,
    totalHalfBathrooms,
    totalSquareMetersBuilt,
    totalSquareMetersLand,
    floorDescription,
    totalFloors,
  } = dataDetail;
  return (
    <ContentFeatures>
      <div
        className={`container-features ${
          publicProperty === true ? "h1-1-17" : ""
        }`}
      >
        <div className="card-amenity">
          <CardAmenity>
            <div className="circle-content">
              <div>
                <img src={"/bed.png"} width="35" height="35" />
              </div>
            </div>
            <div className="info-amenity">
              <h1>{totalBedrooms}</h1>
              <span>Recámaras</span>
            </div>
          </CardAmenity>
          <CardAmenity>
            <div className="circle-content">
              <div>
                <img src={"/iconBathroom.png"} width="35" height="35" />
              </div>
            </div>
            <div className="info-amenity">
              <h1>{totalBathrooms}</h1>
              <span>Baños</span>
            </div>
          </CardAmenity>
        </div>
        <div className="card-amenity">
          <CardAmenity>
            <div className="circle-content">
              <div>
                <img src={"/iconHalfBathroom.png"} width="35" height="35" />
              </div>
            </div>
            <div className="info-amenity">
              <h1>{totalHalfBathrooms}</h1>
              <span>Medios Baños</span>
            </div>
          </CardAmenity>
          <CardAmenity>
            <div className="circle-content">
              <div>
              <img src={"/iconCar.png"} width="45" height="30" />

              </div>
            </div>
            <div className="info-amenity">
              <h1>{totalParkingSpots}</h1>
              <span>Estacionamiento</span>
            </div>
          </CardAmenity>
        </div>
      </div>
      <hr />
      <div className="container-cards">
        <div className="card-amenity">
          <div className="card-content">
            <span>{totalSquareMetersBuilt} m²</span>
            <label htmlFor="">De construcción</label>
          </div>
          <div className="card-content">
            <span>{totalSquareMetersLand} m²</span>
            <label htmlFor="">De Terreno</label>
          </div>
        </div>
        <div className="card-amenity">
          <div className="card-content">
            <span>{totalFloors}</span>
            <label htmlFor="">Cantidad de pisos</label>
          </div>
          <div className="card-content">
            <span>{floorDescription}</span>
            <label htmlFor="">Piso en el que se encuentra</label>
          </div>
        </div>
      </div>
    </ContentFeatures>
  );
};

export default SectionFeatures;
