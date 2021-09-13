import React, { useEffect, useState } from "react";
import styled from "styled-components";
import stylesMiddle from "../styles/middleSection.module.scss";
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
import MiddleInitialSection from "../sections/middleInitialSection";

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

const Home = ({ dataPolicy, dataCountry }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isSelectClient, setIsSelectClient] = useState({
    owner: false,
    tenant: false,
  });
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
          userType={3}
          policyType={null}
          dataCountry={dataCountry}
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
        <section
          title="¡Checa los beneficios que tenemos para tus clientes ! "
          className={stylesMiddle.middleMain}
        >
          <p style={{ marginTop: "5%" }}>
            ¡Checa los <span>beneficios</span> que tenemos para tus clientes !
          </p>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <ButtonClient
              type="button"
              isSelectClient={isSelectClient.tenant}
              onClick={() => {
                setIsSelectClient({ tenant: true, owner: false });
              }}
            >
              Inquilino
            </ButtonClient>
            <ButtonClient
              type="button"
              isSelectClient={isSelectClient.owner}
              onClick={() => {
                setIsSelectClient({ tenant: false, owner: true });
              }}
            >
              Propietario
            </ButtonClient>
          </div>
        </section>
        <MiddleInitialSection
          subTitleSection={null}
          titleSection={null}
          title1={null}
          firstRow={
            isSelectClient.owner === true
              ? [
                  {
                    source: "/servicios.png",
                    alt: "Garantiza tus rentas",
                    label: (
                      <label lang="es">
                        <span>Garantiza</span> tus rentas
                      </label>
                    ),
                    pText: (
                      <p>
                        Asegura el pago de tu renta, gracias a la{" "}
                        <strong>garantía de arrendamiento HOMIFY</strong>
                      </p>
                    ),
                  },
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
                        Puedes rentar sin aval a través de nuestra garantía de
                        renta
                      </p>
                    ),
                  },
                  {
                    source: "/contarjeta.png",
                    alt: "Cobra con tarjeta",
                    label: (
                      <label lang="es">
                        Cobra con <span>tarjeta</span>
                      </label>
                    ),
                    pText: (
                      <p>
                        Cobra mediante cualquier tarjeta, crédito o débito y
                        domicilia tus rentas
                      </p>
                    ),
                  },
                  {
                    source: "/reparaciones.png",
                    alt: "Reporte de incidencias",
                    label: <label lang="es">Reporte de incidencias</label>,
                    pText: (
                      <p>
                        Notificaciones y avisos, sobre algún problema o
                        desperfecto en tu inmueble.
                      </p>
                    ),
                  },
                ]
              : isSelectClient.tenant === true
              ? [
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
                      <p>
                        No te descapitalices y renta sin depósito en garantía
                      </p>
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
                        Paga con cualquier tarjeta, crédito o débito y domicilia
                        tu renta
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
                    pText: (
                      <p>Obtén un descuento o financiamiento para tu mudanza</p>
                    ),
                  },
                ]
              : []
          }
          secondRow={
            isSelectClient.owner === true
              ? [
                  {
                    source: "/search.png",
                    alt: "Investigación de inquilinos",
                    label: <label lang="es">Investigación de inquilinos</label>,
                    pText: (
                      <p>
                        Validamos e investigamos que sea la mejor opción para tu
                        inmueble.
                      </p>
                    ),
                  },
                  {
                    source: "/documentos.png",
                    alt: "Almacena documentos",
                    label: <label lang="es">Almacena documentos</label>,
                    pText: (
                      <p>
                        ¡Adiós papeleo! Todos tus documentos importantes en un
                        solo lugar
                      </p>
                    ),
                  },
                  {
                    source: "/admin.png",
                    alt: "Administración de tu patrimonio.",
                    label: (
                      <label lang="es">Administración de tu patrimonio</label>
                    ),
                    pText: (
                      <p>
                        Administra y controla el pago de rentas, servicios
                        dentro de la app
                      </p>
                    ),
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
                ]
              : isSelectClient.tenant === true
              ? [
                  {
                    source: "/reparaciones.png",
                    alt: "Solicita reparaciones",
                    label: <label lang="es">Solicita reparaciones</label>,
                    pText: (
                      <p>
                        Reporta a tu arrendador o recibe algún comentario de
                        cualquier desperfecto en la propiedad
                      </p>
                    ),
                  },
                  {
                    source: "/documentos.png",
                    alt: "Almacena documentos",
                    label: <label lang="es">Almacena documentos</label>,
                    pText: (
                      <p>
                        ¡Adiós papeleo! Todos tus documentos importantes en un
                        solo lugar
                      </p>
                    ),
                  },
                  {
                    source: "/servicios.png",
                    alt: "Paga tus servicios",
                    label: <label lang="es">Paga tus servicios</label>,
                    pText: (
                      <p>Paga todos tus servicios o deudas dentro de la app</p>
                    ),
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
                ]
              : []
          }
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
    `${process.env.ENVIRONMENT}/api/catalogs/getAllPolicies`,
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
  const responseCountry = await fetch(
    `${process.env.ENVIRONMENT}/api/leads/catalog/getAllCountries`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: 1,
      }),
    }
  );
  const responseResultCountry = await responseCountry.json();
  return {
    dataPolicy: responseResult.response,
    dataCountry: responseResultCountry.response,
  };
};

export default Home;
