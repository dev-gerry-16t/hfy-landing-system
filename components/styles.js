import styled, { keyframes } from "styled-components";

const Content = styled.div`
  font-size: 16px;
  font-family: Poppins;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 460px) {
    font-size: 12px;
  }
`;

const DivLines = styled.div`
  max-width: 168px;
  min-width: 30px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

const ButtonClient = styled.button`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  border: 1px solid #ff0282;
  box-sizing: border-box;
  border-radius: 19px;
  background: ${(props) =>
    props.isSelectClient === false ? "#ffffff" : "#ff0282"};
  color: ${(props) => (props.isSelectClient === false ? "#ff0282" : "#ffffff")};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  padding: 1em 5em;
`;

const zoom = keyframes`
0% {
    transform: scale(1);
}

  50% {
    transform: scale(1.2);

}

100%{
  transform: scale(1);

}
`;

const autoScroll = keyframes`
0%{
  transform:translate(0%);
}
100% { 

  transform:translate(-100%);
 }
`;

const autoScrollReverd = keyframes`
0%{
  transform:translate(0%);
}
100% { 

  transform:translate(100%);
 }
`;

const TopAgentBanner = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  background: #f2f7ff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  .content-images {
    font-size: 16px;
    position: absolute;
    height: 49.0625em;
    top: -5.625em;
    right: 0px;
    img {
      transform: scale(1);
    }
    .effect-img {
      transition: all 0.2s ease-in;
    }
    .effect-img:hover {
      transform: scale(1.1);
    }
    .detail-property {
      width: 14.625em;
      position: absolute;
      z-index: 1;
      right: 35.625em;
      bottom: 18.125em;
      animation: ${zoom};
      animation-delay: 2s;
      animation-duration: 1s;
    }
    .detail-documents {
      width: 13.125em;
      position: absolute;
      z-index: 1;
      bottom: 3.75em;
      right: 35.625em;
      animation: ${zoom};
      animation-delay: 3s;
      animation-duration: 1s;
    }
    .detail-prospect {
      width: 15.125em;
      position: absolute;
      z-index: 1;
      right: 23.125em;
      top: 10em;
      animation: ${zoom};
      animation-delay: 1s;
      animation-duration: 1s;
    }
    .detail-public-property {
      width: 19.375em;
      position: absolute;
      z-index: 1;
      right: 6.25em;
      top: 4.6875em;
      animation: ${zoom};
      animation-delay: 0s;
      animation-duration: 1s;
    }
    .detail-policy {
      width: 28.1875em;
      position: absolute;
      z-index: 1;
      bottom: -5.9375em;
      right: 6.25em;
      animation: ${zoom};
      animation-delay: 4s;
      animation-duration: 1s;
    }
    .detail-dashboard {
      width: 44.3125em;
      position: absolute;
      right: -5.625em;
      top: 12.5em;
      z-index: 0;
    }
  }

  @media screen and (max-width: 1260px) {
    .content-images {
      right: -12em;
    }
  }
  @media screen and (max-width: 970px) {
    .content-images {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    height: auto;
    padding: 1em;
    .content-images {
      font-size: 10px;
      position: relative;
      right: 0em;
    }
  }
  @media screen and (max-width: 460px) {
    .content-images {
      font-size: 9px;
      right: -15em;
    }
  }
`;

const ContainerImages = styled.div`
  overflow: hidden;
`;

const ContainerInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .section-info {
    .banner-principal {
      text-align: center;
      h2 {
        margin: 0px;
        font-size: 1.5em;
      }
      h1 {
        margin: 0px;
        font-size: 2.5em;
        span {
          color: #ff0282;
        }
      }
      margin-bottom: 5em;
    }
    .info-tools {
      .content-plan-info {
        .info-check {
          margin-bottom: 15px;
          svg {
            padding-top: 3px;
          }
          span {
            margin-left: 5px;
          }
        }
      }
      .request-demo {
        button {
          cursor: pointer;
          padding: 5px 3em;
          font-family: Poppins;
          border-radius: 16px;
          border: none;
          background: #ff0282;
          color: #fff;
          font-size: 1em;
          font-weight: 500;
        }
      }
    }
  }
  @media screen and (max-width: 760px) {
    justify-content: flex-start;
  }
`;

const RatingUsers = styled.div`
  width: 100%;
  .top-rating-info {
    padding: 3em 0px;
    text-align: center;
    h1 {
      font-size: 1.8em;
      span {
        color: #ff0282;
      }
    }
    p {
      font-size: 1.2em;
    }

    .general-rating {
      margin-top: 3em;
      .star {
        position: relative;
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.9em;
        margin-right: 0.9em;
        margin-bottom: 1.2em;
        border-right: 0.3em solid transparent;
        border-bottom: 0.7em solid #fc0;
        border-left: 0.3em solid transparent;
        font-size: 2em;
        &:before,
        &:after {
          content: "";
          display: block;
          width: 0;
          height: 0;
          position: absolute;
          top: 0.6em;
          left: -1em;
          border-right: 1em solid transparent;
          border-bottom: 0.7em solid #fc0;
          border-left: 1em solid transparent;
          transform: rotate(-35deg);
        }
        &:after {
          transform: rotate(35deg);
        }
      }
    }
    @media screen and (max-width: 460px) {
      .general-rating {
        .star {
          font-size: 1.5em;
        }
      }
    }
  }
  .section-cards-comments {
    display: flex;
    flex-wrap: nowrap;
    margin: 0px 0px 20px 0px;
    padding: 35px 0px;
    width: ${(props) => props.widthSection}px;
    overflow-x: hidden;
    animation: ${(props) => props.timeScroll}s linear 0s infinite normal none
      running ${autoScroll};
    &::-webkit-scrollbar {
      display: none;
    }
    div[title="usuarios"] {
      max-width: 340px;
      min-width: 340px;
      height: 250px;
      margin: 0px 15px;
      background: #ffffff;
      box-shadow: 0px 6px 22px 12px rgba(205, 213, 219, 0.6);
      border-radius: 54px;
      padding: 10px 35px;
      section[title="info-usuario-homify"] {
        margin: 10px 0px;
        display: flex;
        img {
          margin-right: 10px;
        }
        p {
          text-align: left;
        }
      }
      label[title="comentario"] {
        font-size: 14px;
        text-align: left;
      }
    }
  }
  .section-cards-comments:hover {
    animation-play-state: paused;
  }

  @media screen and (max-width: 750px) {
    .section-cards-comments {
      justify-content: normal;
    }
  }
`;

const PricingHomify = styled.div`
  margin: 5em 0px;
  padding: 1em 5em;
  overflow-x: hidden;
  .title-section-functionalities {
    font-size: 1.8em;
    span {
      color: #ff0282;
    }
  }
  .register-now {
    font-size: 1.4em;
  }
  .table-pricing {
    margin-top: 5em;
    .row-tab-pricing {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      grid-column-gap: 2px;
      .tab-pricing {
        padding: 0.5em 1em;
        border-radius: 1em 1em 0px 0px;
        text-align: center;
        font-weight: 700;
        color: #fff;
      }
      .tab-pricing-function {
        background: #6e7191;
        width: 60%;
      }
      .tab-pricing-cost {
        background: #ff0282;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .table-pricing {
      .row-tab-pricing {
        .tab-pricing-cost {
          opacity: 0.5;
        }
        .not-opacity-tab {
          opacity: 1;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 1em 2em;
  }
  @media screen and (max-width: 400px) {
    .table-pricing {
      .row-tab-pricing {
        .tab-pricing-function {
          width: 100%;
        }
      }
    }
  }
`;

const ToolsApp = styled.div`
  padding: 1em 5em;
  overflow: hidden;
  .title-section-functionalities {
    font-size: 1.8em;
    span {
      color: #ff0282;
    }
  }
  .register-now {
    font-size: 1.4em;
  }

  .content-functionalities {
    margin-top: 5em;
    display: flex;
    flex-direction: column;
  }
  .content-functionalities-small {
    margin-top: 4em;
    display: flex;
    justify-content: space-around;
  }
  .content-functionalities-small-mobile {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    padding: 1em 2em;
  }
  @media screen and (max-width: 960px) {
    padding: 1em 1em;
  }

  @media screen and (max-width: 600px) {
    .content-functionalities-small {
      display: none;
    }
    .content-functionalities-small-mobile {
      display: flex;
      flex-direction: column;
    }
  }
`;

const CardFunctions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  .info-functionality {
    max-width: 315px;
    h2 {
      span {
        color: #ff0282;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    justify-content: space-between;
    img {
      width: 22em;
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
    align-items: flex-start;
    .info-functionality {
      max-width: 100%;
    }

    img {
      width: 100%;
    }
  }
`;

const CardFunctionsSmall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 8.75em;
  }
  .info-functionality {
    max-width: 315px;
    text-align: center;
    h2 {
      span {
        color: #ff0282;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    img {
      width: 7em;
    }
  }
  @media screen and (max-width: 600px) {
    min-width: 100%;
    width: 100%;
  }
`;

const TablePricing = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 8px 6px #ebebf1;
  border-radius: 1em;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-column-gap: 2px;
  overflow-x: hidden;
  .pricing-functions {
    border-right: 1px solid #cdd5db;
    .tab-pricing {
      position: relative;
      height: 1em;
      background: #fff;
      .tab-function {
        position: absolute;
        width: 70%;
        background: #6e7191;
      }
    }
    .tr-price {
      background: #fff;
      padding: 0.7em 1em;
      font-size: 0.8em;
      height: 36px;
    }
    .tr-price:nth-child(odd) {
      background: #f7f8fa;
    }
    .button-pricing {
      background: #fff;
    }
  }
  .pricing-1,
  .pricing-2,
  .pricing-3 {
    .tab-pricing {
      position: relative;
      height: 1em;
      background: #fff;
      .tab-function {
        position: absolute;
        width: 70%;
        background: #6e7191;
      }
    }
    border-right: 1px solid #cdd5db;
    border-left: 1px solid #cdd5db;
    .tr-price {
      background: #fff;
      padding: 0.7em 1em;
      font-size: 0.8em;
      height: 36px;
      text-align: center;
    }
    .tr-price:nth-child(odd) {
      background: #f7f8fa;
    }
    .button-pricing {
      background: #fff;
      text-align: center;
      padding: 1em 0px;
      button {
        cursor: pointer;
        padding: 2px 0.5em;
        font-family: Poppins;
        border-radius: 16px;
        border: none;
        background: #ff0282;
        color: #fff;
        font-size: 1em;
        font-weight: 500;
      }
    }
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 2fr 3fr;
    .pricing-functions {
      .tr-price {
        height: 56px;
      }
    }

    .pricing-1,
    .pricing-2,
    .pricing-3 {
      display: none;
      .tr-price {
        height: 56px;
      }
    }
    .select-pricing {
      display: block;
    }
  }
`;

const MessageToUser = styled.div`
  position: relative;
  background: #f7f8fa;
  display: flex;
  justify-content: center;
  padding: 5em 0px;
  overflow: hidden;
  .text-to-user {
    width: 50%;
    text-align: center;
    svg {
      width: 90px;
    }
    h3 {
      color: #ff0282;
    }
  }
  .city-scape-homify {
    position: absolute;
    width: 100%;
    .cloud-1 {
      right: 10em;
      position: absolute;
      opacity: 0.04;
      animation: 10s linear 0s infinite normal none running ${autoScroll};
      img {
        width: 100px;
      }
    }
    .cloud-2 {
      left: 10em;
      top: 2em;
      position: absolute;
      opacity: 0.04;
      animation: 10s linear 0s infinite normal none running ${autoScrollReverd};
      img {
        width: 100px;
      }
    }
  }
`;

const WhatsApp = styled.div`
  width: 5.1em;
  position: fixed;
  left: 4em;
  bottom: 5em;
  z-index: 5;
  .whatsapp-contact {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.5em;
    height: 4.5em;
    border-radius: 100%;
    background: #ff0282;
    cursor: pointer;
  }
`;

export {
  Content,
  WhatsApp,
  TopAgentBanner,
  ContainerInformation,
  DivLines,
  ButtonClient,
  ContainerImages,
  PricingHomify,
  ToolsApp,
  CardFunctions,
  CardFunctionsSmall,
  TablePricing,
  MessageToUser,
  RatingUsers,
};
