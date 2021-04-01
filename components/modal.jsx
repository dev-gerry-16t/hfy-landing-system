import React from "react";
import styled from "styled-components";

const CustomModal = ({ isVisible, onClose, title, children }) => {
  const ModalComponent = styled.div`
    display: ${isVisible === true ? "block" : "none"};
    position: ${isVisible === true ? "fixed" : "absolute"};
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 145vh;
    overflow: auto;
    background: rgba(78, 75, 102, 0.3);
    transition: all 0.3s;
    backdrop-filter: blur(5px);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    animation: fadein 0.3s;

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;

  const ModalContent = styled.div`
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 610px;
    border: none;
    border-radius: 16px;
  `;

  const TitleModal = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
  `;

  const TitleModalH1 = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 1px;
    color: #ff0282;
    margin: 0px;
  `;

  const ExitModal = styled.button`
    border: none;
    background: transparent;
    position: absolute;
    top: 3px;
    left: 0px;
    outline: none;
    cursor: pointer;
  `;

  return (
    <ModalComponent>
      <ModalContent>
        <div>
          <TitleModal>
            <ExitModal
              className="arrow-back-to"
              type="button"
              onClick={() => {
                onClose();
              }}
            >
              <svg
                width="38"
                height="38"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 24.5488L38.5 24.5488"
                  stroke="#FF0282"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.5996 36.5975L8.49961 24.5495L20.5996 12.4995"
                  stroke="#FF0282"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </ExitModal>
            <TitleModalH1>{title}</TitleModalH1>
          </TitleModal>
        </div>
        {children}
      </ModalContent>
    </ModalComponent>
  );
};

export default CustomModal;
