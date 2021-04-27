import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PrincipalContent from "../sections/principalContent";
import TopInitialSection from "../sections/topInitialSection";
import PosterRegister from "../sections/posterRegister";
import UserCommentSection from "../sections/userCommentsSection";
import WhyContractHomify from "../sections/whyContractHomify";
import ScreenshotSection from "../sections/screenshotSection";
import CustomModal from "../components/modal";
import FormRegister from "../components/formRegister";
import WidgetStepProcess from "../components/widgetStepsProcess";
import SectionProcessHomify from "../sections/sectionProcessHomify";

const DivLines = styled.div`
  max-width: 168px;
  min-width: 30px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

const Home = ({ dataPolicy }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  return (
    <PrincipalContent
      openModal={(visible) => {
        setIsVisibleModal(visible);
      }}
    >
      <CustomModal
        isVisible={isVisibleModal}
        onClose={() => {
          setIsVisibleModal(false);
        }}
        title="Compártenos tus datos"
      >
        <FormRegister
          onClose={(visible) => {
            setIsVisibleModal(visible);
          }}
          dataPolicy={dataPolicy}
        />
      </CustomModal>
      <TopInitialSection
        openModal={(visible) => {
          setIsVisibleModal(visible);
        }}
        title1="Se un aliado HOMIFY,"
        title2="comisiones hasta el 30%"
        subTitle="Renta más rápido con HOMIFY"
        titleSection="Se un aliado HOMIFY, comisiones hasta el 30%"
      />
      <div style={{ background: "#fff" }}>
        <SectionProcessHomify>
          <WidgetStepProcess
            step="1"
            src="/register.png"
            width={105}
            height={103}
            alt="Regístrate"
            label="Regístrate"
          />
          <DivLines>
            <svg
              width="168"
              height="32"
              viewBox="0 0 168 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 25.7413C3 25.7413 51.7635 33.2016 87.025 27.1371C122.286 21.0726 165.493 2.67157 165.493 2.67157"
                stroke="#D9DBE1"
                stroke-width="4"
                stroke-linecap="round"
                stroke-dasharray="2 6"
              />
            </svg>
          </DivLines>
          <WidgetStepProcess
            step="2"
            src="/typeform.png"
            width={105}
            height={103}
            alt="Llena el formulario"
            label="Llena el formulario"
          />
          <DivLines>
            <svg
              width="168"
              height="30"
              viewBox="0 0 168 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4.21155C3 4.21155 51.7635 -0.32251 87.025 5.74197C122.286 11.8064 165.493 27.2812 165.493 27.2812"
                stroke="#D9DBE1"
                stroke-width="4"
                stroke-linecap="round"
                stroke-dasharray="2 6"
              />
            </svg>
          </DivLines>
          <WidgetStepProcess
            step="3"
            src="/contarjeta1.png"
            width={105}
            height={90}
            alt="Elige y paga tu póliza"
            label="Paga tu póliza"
          />
          <DivLines>
            <svg
              width="168"
              height="32"
              viewBox="0 0 168 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 25.7168C3 25.7168 51.7635 33.1771 87.025 27.1125C122.287 21.048 165.493 2.6469 165.493 2.6469"
                stroke="#D9DBE1"
                stroke-width="4"
                stroke-linecap="round"
                stroke-dasharray="2 6"
              />
            </svg>
          </DivLines>
          <WidgetStepProcess
            step="4"
            src="/pen.png"
            width={105}
            height={103}
            alt="Firma electrónica"
            label="Firma electrónica"
          />
        </SectionProcessHomify>
        <PosterRegister
          openModal={(visible) => {
            setIsVisibleModal(visible);
          }}
          title="Contrata tu garantía de rentas HOMIFY"
          titleCard="Contrata tu garantía de"
          titleCard2="rentas HOMIFY"
        />
        <WhyContractHomify />
        <UserCommentSection />
        <ScreenshotSection
          openModal={(visible) => {
            setIsVisibleModal(visible);
          }}
        />
      </div>
    </PrincipalContent>
  );
};

Home.getInitialProps = async (ctx) => {
  const response = await fetch(
    "https://api.homify.ai/api/catalogs/getAllPolicies",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idCustomer: null,
        idCustomerTenant: null,
        idSystemUser: null,
        idLoginHistory: null,
        type: 3,
        idProspectType: 2,
      }),
    }
  );
  const responseResult = await response.json();
  return { dataPolicy: responseResult.response };
};

export default Home;
