import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PrincipalContent from "../sections/principalContent";
import TopInitialSection from "../sections/topInitialSection";
import MiddleInitialSection from "../sections/middleInitialSection";
import PosterRegister from "../sections/posterRegister";
import UserCommentSection from "../sections/userCommentsSection";
import ScreenshotSection from "../sections/screenshotSection";
import CustomModal from "../components/modal";
import FormRegister from "../components/formRegister";
import WidgetStepProcess from "../components/widgetStepsProcess";
import SectionProcessHomify from "../sections/sectionProcessHomify";
import SectionQuotePolicy from "../sections/sectionQuotePolicy";
import WhyContractHomify from "../sections/whyContractHomifyUser";

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
  const [isSelectPolicy, setIsSelectPolicy] = useState(null);
  const [isSelectAmount, setIsSelectAmount] = useState(0);

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
          userType={1}
          policyType={isSelectPolicy}
          amountPolicy={isSelectAmount}
        />
      </CustomModal>
      <TopInitialSection
        openModal={(visible) => {
          setIsVisibleModal(visible);
        }}
        title1="Renta sin aval y sin depósito"
        title2="en garantía."
        subTitle="Ahorra hasta el 50% al mudarte"
        titleSection="Renta sin aval y sin depósito en garantía."
      />
      <div style={{ background: "#fff" }}>
        <MiddleInitialSection
          subTitleSection="Todo lo que necesitas para rentar, administrar y organizar"
          titleSection={
            <p style={{ marginTop: "5%" }}>
              ¡<span>Todo lo que necesitas</span> en un mismo lugar!
            </p>
          }
          title1="Renta sin aval a través de nuestra garantía de renta"
          firstRow={[
            {
              source: "/sinaval.png",
              alt: "Renta sin aval",
              label: (
                <label lang="es">
                  Renta<span> SIN </span>aval
                </label>
              ),
              pText: (
                <p>
                  Puedes rentar sin aval a través de nuestra
                  <strong> garantía de renta</strong>
                </p>
              ),
            },
            {
              source: "/sindeposito.png",
              alt: "Renta sin depósito",
              label: (
                <label lang="es">
                  Renta<span> SIN </span>depósito
                </label>
              ),
              pText: (
                <p>No te descapitalices y renta sin depósito en garantía</p>
              ),
            },
            {
              source: "/contarjeta.png",
              alt: "Paga con tarjeta",
              label: (
                <label lang="es">
                  Paga con <span>tarjeta</span>
                </label>
              ),
              pText: (
                <p>
                  Paga con cualquier tarjeta, crédito o débito y domicilia tu
                  renta
                </p>
              ),
            },
            {
              source: "/mudanza.png",
              alt: "Mudanza a precio especial",
              label: (
                <label lang="es">
                  Mudanza a <span>precio especial</span>
                </label>
              ),
              pText: <p>Obtén un descuento o financiamiento para tu mudanza</p>,
            },
          ]}
          secondRow={[
            {
              source: "/reparaciones.png",
              alt: "Solicita reparaciones",
              label: (
                <label lang="es">
                  Solicita <span>reparaciones</span>
                </label>
              ),
              pText: (
                <p>
                  Reporta a tu arrendador o recibe algún comentario de cualquier
                  desperfecto en la propiedad
                </p>
              ),
            },
            {
              source: "/documentos.png",
              alt: "Almacena documentos",
              label: (
                <label lang="es">
                  <span>Almacena</span> documentos
                </label>
              ),
              pText: (
                <p>
                  ¡Adiós papeleo! Todos tus documentos importantes en un solo
                  lugar
                </p>
              ),
            },
            {
              source: "/servicios.png",
              alt: "Paga tus servicios",
              label: (
                <label lang="es">
                  Paga tus <span>servicios</span>
                </label>
              ),
              pText: <p>Paga todos tus servicios o deudas dentro de la app</p>,
            },
            {
              source: "/chat247.png",
              alt: "Chat 24/7",
              label: (
                <label lang="es">
                  Chat <span>24/7</span>
                </label>
              ),
              pText: <p>Comunicación fácil y rápida con tu arrendador</p>,
            },
          ]}
        />
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
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="2 6"
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
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="2 6"
              />
            </svg>
          </DivLines>
          <WidgetStepProcess
            step="3"
            src="/check.png"
            width={105}
            height={103}
            alt="Aprobación"
            label="Aprobación"
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
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="2 6"
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
        <SectionQuotePolicy
          dataPolicy={dataPolicy}
          onSelectPolicy={(data) => {
            setIsSelectPolicy(data.idPolicy);
            setIsVisibleModal(true);
            setIsSelectAmount(data.budgeAmount);
          }}
        />
        <PosterRegister
          openModal={(visible) => {
            setIsVisibleModal(visible);
          }}
          title="Nosotros nos preocupamos por cobrar"
          titleCard="Estás a un paso,"
          titleCard2="de rentar tu nuevo hogar"
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
