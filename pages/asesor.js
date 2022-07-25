import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Head from "next/head";
import styled, { keyframes } from "styled-components";
import stylesMiddle from "../styles/middleSection.module.scss";
import PrincipalContent from "../sections/principalContent";
import TopInitialSection from "../sections/topInitialSection";
import PosterRegister from "../sections/posterRegister";
import UserCommentSection from "../sections/userCommentsSection";
import WhyContractHomify from "../sections/whyContractHomify";
import ScreenshotSection from "../sections/screenshotSection";
import CustomModal from "../components/modal";
import FormRegister from "../components/formRegister";
import WidgetStepProcess from "../components/widgetStepsProcessv2";
import SectionProcessHomify from "../sections/sectionProcessHomify";
import MiddleInitialSection from "../sections/middleInitialSection";
import WidgetCardComment from "../components/widgetCardComment";
import isEmpty from "lodash/isEmpty";
import isNil from "lodash/isNil";
import IconCheckFill from "../assets/svg/iconCheckFill.svg";
import IconTimesEmpty from "../assets/svg/iconTimesEmpty.svg";
import IconWhats from "../assets/svg/iconWhats.svg";
import {
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
} from "../components/styles";

const Home = ({ dataPolicy, dataReviews }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [selectInfoSubscription, setSelectInfoSubscription] = useState(1);
  const [isSelectClient, setIsSelectClient] = useState({
    owner: false,
    tenant: false,
  });
  const [count, setCount] = useState(0);

  return (
    <>
      <Head>
        <title>Homify - Asesor</title>
        <meta
          name="description"
          content="Vende, Renta y Adquiere documentos legales para bienes raíces con Homify"
        ></meta>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2897969,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`,
          }}
        />
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/21737012.js"
        ></script>
      </Head>
      <PrincipalContent
        openModal={(visible) => {
          setIsVisibleModal(visible);
        }}
        userType={3}
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
          />
        </CustomModal>
        <div
          style={{
            height: "70px",
          }}
        ></div>
        <Content>
          <WhatsApp
            onClick={() => {
              window.open("https://wa.me/5215537011025", "_blank");
            }}
          >
            <div className="whatsapp-contact">
              <IconWhats />
            </div>
          </WhatsApp>
          <TopAgentBanner>
            <div className="content-images">
              <img
                src="/card-detail-property.png"
                alt="ficha técnica de una propiedad"
                className="detail-property effect-img"
              ></img>
              <img
                src="/card-detail-documents.png"
                alt="sección de documentación"
                className="detail-documents effect-img"
              ></img>
              <img
                src="/card-detail-prospect.png"
                alt="detalle de un prospecto"
                className="detail-prospect effect-img"
              ></img>
              <img
                src="/card-detail-public-property.png"
                alt="modal de propiedad publicada"
                className="detail-public-property effect-img"
              ></img>
              <img
                src="/card-detail-policy.png"
                alt="Detalle para seleccionar una póliza"
                className="detail-policy effect-img"
              ></img>
              <img
                src="/card-detail-dashboard.png"
                alt="Dashboard de un asesor"
                className="detail-dashboard effect-img"
              ></img>
            </div>
            <ContainerInformation>
              <div className="section-info">
                <div className="banner-principal">
                  <h2>Adiós CRM Inmobiliario</h2>
                  <h1>
                    ¡Hola <span>Homify</span>!
                  </h1>
                </div>
                <div className="info-tools">
                  <p>Todas tus herramientas en una sola plataforma</p>
                  <div className="content-plan-info">
                    <div className="info-check">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8.5" cy="8.5" r="8" stroke="#FF0282" />
                        <path
                          d="M5 9L7.66742 12L13 6"
                          stroke="#FF0282"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>{" "}
                      <span>Crea y comparte fichas técnicas</span>
                    </div>
                    <div className="info-check">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8.5" cy="8.5" r="8" stroke="#FF0282" />
                        <path
                          d="M5 9L7.66742 12L13 6"
                          stroke="#FF0282"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>{" "}
                      <span>Aumenta tu inventario</span>
                    </div>
                    <div className="info-check">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8.5" cy="8.5" r="8" stroke="#FF0282" />
                        <path
                          d="M5 9L7.66742 12L13 6"
                          stroke="#FF0282"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>{" "}
                      <span>Investigación de inquilinos</span>
                    </div>
                    <div className="info-check">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8.5" cy="8.5" r="8" stroke="#FF0282" />
                        <path
                          d="M5 9L7.66742 12L13 6"
                          stroke="#FF0282"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>{" "}
                      <span>Contratos y pólizas jurídicas</span>
                    </div>
                  </div>
                  <div className="request-demo">
                    <button
                      onClick={() => {
                        setIsVisibleModal(true);
                        // window.open(
                        //   "https://app.homify.ai/registro-asesor",
                        //   "_blank"
                        // );
                      }}
                    >
                      Solicitar una Demo
                    </button>
                  </div>
                </div>
              </div>
            </ContainerInformation>
          </TopAgentBanner>
          <RatingUsers
            widthSection={
              isEmpty(dataReviews.reviews) === false
                ? dataReviews.reviews.length * 2 * 372
                : 0
            }
            timeScroll={
              isEmpty(dataReviews.reviews) === false
                ? dataReviews.reviews.length * 2 * 10
                : 0
            }
          >
            <div className="top-rating-info">
              <h1>
                Calificación de <span>Nuestros Clientes</span>
              </h1>
              <p>
                Somos la mejor opción, nuestra reputación es de 5 estrellas
                compáranos con la competencia
              </p>
              <div className="general-rating">
                <p>
                  <i className="star"></i>
                  <i className="star"></i>
                  <i className="star"></i>
                  <i className="star"></i>
                  <i className="star"></i>
                </p>
              </div>
            </div>
            <div
              style={{
                overflow: "hidden",
              }}
            >
              <section
                title="Mi experiencia en homify"
                className="section-cards-comments"
              >
                {isNil(dataReviews) === false &&
                  isEmpty(dataReviews) === false &&
                  isNil(dataReviews.reviews) === false &&
                  isEmpty(dataReviews.reviews) === false &&
                  dataReviews.reviews.map((row) => {
                    return (
                      <WidgetCardComment
                        name={row.author_name}
                        lastName=""
                        userType=""
                        rating={row.rating}
                        src={row.profile_photo_url}
                        text={`“${row.text}”`}
                      />
                    );
                  })}
                {isNil(dataReviews) === false &&
                  isEmpty(dataReviews) === false &&
                  isNil(dataReviews.reviews) === false &&
                  isEmpty(dataReviews.reviews) === false &&
                  dataReviews.reviews.map((row) => {
                    return (
                      <WidgetCardComment
                        name={row.author_name}
                        lastName=""
                        userType=""
                        rating={row.rating}
                        src={row.profile_photo_url}
                        text={`“${row.text}”`}
                      />
                    );
                  })}
              </section>
            </div>

            <div
              style={{
                textAlign: "center",
                paddingBottom: "3em",
              }}
            >
              <p>
                <strong>Google</strong> rating score: {dataReviews.rating} of 5,
                based on{" "}
                <strong>
                  {isNil(dataReviews) === false &&
                  isEmpty(dataReviews) === false
                    ? dataReviews.reviews.length
                    : ""}{" "}
                  reviews
                </strong>
              </p>
            </div>
          </RatingUsers>
          <ToolsApp left={`-${count * 300}px`}>
            <h1 className="title-section-functionalities">
              ¡<span>Todo lo que necesitas</span> en un mismo lugar!
            </h1>
            <span className="register-now"></span>
            <div className="content-functionalities">
              <Fade left>
                <CardFunctions reverse={false}>
                  <img
                    src="/card-function-property.png"
                    alt="detalle de la propiedad"
                  ></img>
                  <div className="info-functionality">
                    <h2>
                      <span>Crea</span> fichas técnicas
                    </h2>
                    <p>
                      <strong>Crea</strong> fichas, <strong>publica</strong> en
                      nuestra bolsa inmobiliaria y <strong>comparte</strong> con
                      otros asesores.
                    </p>
                  </div>
                </CardFunctions>
              </Fade>
              <Fade right>
                <CardFunctions reverse={true}>
                  <div className="info-functionality">
                    <h2>
                      <span>Protege</span> a tus clientes
                    </h2>
                    <p>
                      Solicita pólizas jurídicas y{" "}
                      <strong>obtén una comisión del 20%.</strong>
                    </p>
                  </div>
                  <img
                    src="/card-function-security.png"
                    alt="detalle de la propiedad"
                  ></img>
                </CardFunctions>
              </Fade>
              <Fade left>
                <CardFunctions reverse={false}>
                  <img
                    src="/card-function-contract.png"
                    alt="detalle de la propiedad"
                  ></img>
                  <div className="info-functionality">
                    <h2>
                      <span>Genera</span> contratos de arrendamiento
                    </h2>
                    <p>
                      Contratos, pagarés y recibos de pago personalizados{" "}
                      <strong>en menos de 1 hora.</strong>
                    </p>
                  </div>
                </CardFunctions>
              </Fade>
              <Fade right>
                <CardFunctions reverse={true}>
                  <div className="info-functionality">
                    <h2>
                      <span>Agrega</span> inquilinos
                    </h2>
                    <p>
                      Agrega inquilinos o recibe prospectos, monitorea su avance
                      y obtén el
                      <strong> resultado de su investigación.</strong>
                    </p>
                  </div>
                  <img
                    src="/card-function-tenants.png"
                    alt="detalle de la propiedad"
                  ></img>
                </CardFunctions>
              </Fade>
            </div>
            <h1 className="title-section-functionalities">... Y mucho más</h1>
            <Zoom bottom>
              <div className="content-functionalities-small">
                <CardFunctionsSmall>
                  <img
                    src="/card-function-agent.png"
                    alt="detalle de la propiedad"
                  ></img>
                  <div className="info-functionality">
                    <h2>
                      <span>Comparte</span> con otros asesores
                    </h2>
                    <p>
                      <strong>Conecta con otros asesores</strong> y comparte
                      comisión.
                    </p>
                  </div>
                </CardFunctionsSmall>
                <CardFunctionsSmall>
                  <img
                    src="/card-function-alert.png"
                    alt="detalle de la propiedad"
                  ></img>
                  <div className="info-functionality">
                    <h2>
                      <span>Recibe</span> alertas
                    </h2>
                    <p>
                      <strong>Te notificamos 60 días antes</strong> del
                      vencimiento de contratos.
                    </p>
                  </div>
                </CardFunctionsSmall>
                <CardFunctionsSmall>
                  <img
                    src="/card-function-cert.png"
                    alt="detalle de la propiedad"
                  ></img>
                  <div className="info-functionality">
                    <h2>
                      Conviértete <span>en asesor verificado</span>
                    </h2>
                    <p>
                      Un <strong>asesor verificado brinda confianza</strong> a
                      otros usuarios.
                    </p>
                  </div>
                </CardFunctionsSmall>
              </div>
            </Zoom>
            <div className="content-functionalities-small-mobile">
              <CardFunctionsSmall>
                <img
                  src="/card-function-agent.png"
                  alt="detalle de la propiedad"
                ></img>
                <div className="info-functionality">
                  <h2>
                    <span>Comparte</span> con otros asesores
                  </h2>
                  <p>
                    <strong>Conecta con otros asesores</strong> y comparte
                    comisión.
                  </p>
                </div>
              </CardFunctionsSmall>
              <CardFunctionsSmall>
                <img
                  src="/card-function-alert.png"
                  alt="detalle de la propiedad"
                ></img>
                <div className="info-functionality">
                  <h2>
                    <span>Recibe</span> alertas
                  </h2>
                  <p>
                    <strong>Te notificamos 60 días antes</strong> del
                    vencimiento de contratos.
                  </p>
                </div>
              </CardFunctionsSmall>
              <CardFunctionsSmall>
                <img
                  src="/card-function-cert.png"
                  alt="detalle de la propiedad"
                ></img>
                <div className="info-functionality">
                  <h2>
                    Conviértete <span>en asesor verificado</span>
                  </h2>
                  <p>
                    Un <strong>asesor verificado brinda confianza</strong> a
                    otros usuarios.
                  </p>
                </div>
              </CardFunctionsSmall>
            </div>
          </ToolsApp>
          <SectionProcessHomify>
            <WidgetStepProcess
              step="1"
              src="/card-process-addproperty.png"
              width={105}
              height={103}
              alt="Agrega tu propiedad"
              label="Agrega tu propiedad"
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
              src="/card-process-public.png"
              width={105}
              height={103}
              alt="Publica en portales"
              label="Publica en principales portales"
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
              src="/card-process-tenant.png"
              width={105}
              height={90}
              alt="Califica a inquilinos"
              label="Califica a tus inquilinos"
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
              src="/card-process-contract.png"
              width={105}
              height={90}
              alt="Descarga contratos"
              label="Descarga el contrato de arrendamiento"
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
              step="5"
              src="/card-process-signature.png"
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
            title="Ahorra tiempo en tus procesos de arrendamiento"
            titleCard="Ahorra tiempo en tus procesos"
            titleCard2="de arrendamiento"
          />
          <PricingHomify>
            <h1 className="title-section-functionalities">
              ¡Planes <span>Homify</span>!
            </h1>
            <span className="register-now">
              Los mejores precios del mercado
            </span>
            <div className="table-pricing">
              <div className="row-tab-pricing">
                <div className="tab-pricing tab-pricing-function">
                  <div>Funciones</div>
                </div>
                <div
                  className={`tab-pricing tab-pricing-cost ${
                    selectInfoSubscription === 1 ? "not-opacity-tab" : ""
                  }`}
                  onClick={() => {
                    setSelectInfoSubscription(1);
                  }}
                >
                  <div>Gratis</div>
                </div>
                <div
                  className={`tab-pricing tab-pricing-cost ${
                    selectInfoSubscription === 2 ? "not-opacity-tab" : ""
                  }`}
                  onClick={() => {
                    setSelectInfoSubscription(2);
                  }}
                >
                  <div>$599</div>
                </div>
                <div
                  className={`tab-pricing tab-pricing-cost ${
                    selectInfoSubscription === 3 ? "not-opacity-tab" : ""
                  }`}
                  onClick={() => {
                    setSelectInfoSubscription(3);
                  }}
                >
                  <div>$799</div>
                </div>
              </div>
              <TablePricing>
                <div className="pricing-functions">
                  <div className="tab-pricing"></div>
                  <div className="tr-price">
                    <span>Creación de fichas técnicas</span>
                  </div>
                  <div className="tr-price">
                    <span>Comparte fichas técnicas con otros asesores</span>
                  </div>
                  <div className="tr-price">
                    <span>Bolsa inmobiliaria</span>
                  </div>
                  <div className="tr-price">
                    <span>Propiedades directas comisión 80% para asesores</span>
                  </div>
                  <div className="tr-price">
                    <span>Creación de Contratos arrendamiento</span>
                  </div>
                  <div className="tr-price">
                    <span>Creación de pagarés</span>
                  </div>
                  <div className="tr-price">
                    <span>Investigación de inquilinos</span>
                  </div>
                  <div className="tr-price">
                    <span>Alertas de no renovación de tus inquilinos</span>
                  </div>
                  <div className="tr-price">
                    <span>Requerimientos de propiedades</span>
                  </div>
                  <div className="tr-price">
                    <span>
                      Publicación en Facebook y portales inmobiliarios
                    </span>
                  </div>
                  <div className="tr-price">
                    <span>10 Publicaciones en Mercado Libre</span>
                  </div>
                  {/* <div className="tr-price">
                    <span>10 Publicaciones en Lamudi</span>
                  </div>
                  <div className="tr-price">
                    <span>10 Publicaciones en propiedades.com</span>
                  </div> */}
                  <div className="tr-price">
                    <span>Acceso a capacitación</span>
                  </div>
                  <div className="tr-price">
                    <span>Marketing</span>
                  </div>
                  <div className="tr-price">
                    <span>Asesoría legal, fiscal y administrativa</span>
                  </div>
                  <div className="tr-price">
                    <span>Póliza jurídica</span>
                  </div>
                  <div className="button-pricing"></div>
                </div>
                <div
                  className={`pricing-1 ${
                    selectInfoSubscription === 1 ? "select-pricing" : ""
                  }`}
                >
                  <div className="tab-pricing"></div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconTimesEmpty />
                  </div>
                  <div className="tr-price">
                    <span>*Costo adicional</span>
                  </div>
                  <div className="tr-price">
                    <span>*Costo adicional</span>
                  </div>
                  <div className="tr-price">
                    <span>*Costo adicional</span>
                  </div>
                  <div className="tr-price"></div>
                  <div className="tr-price"></div>
                  <div className="tr-price"></div>
                  <div className="tr-price"></div>
                  {/* <div className="tr-price"></div>
                  <div className="tr-price"></div> */}
                  <div className="tr-price"></div>
                  <div className="tr-price"></div>
                  <div className="tr-price"></div>
                  <div className="tr-price">
                    <span>*Costo adicional</span>
                  </div>
                  <div className="button-pricing">
                    <button
                      onClick={() => {
                        window.open(
                          "https://app.homify.ai/registro-asesor",
                          "_blank"
                        );
                      }}
                    >
                      Prueba gratis
                    </button>
                  </div>
                </div>
                <div
                  className={`pricing-2 ${
                    selectInfoSubscription === 2 ? "select-pricing" : ""
                  }`}
                >
                  <div className="tab-pricing"></div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconTimesEmpty />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price"></div>
                  {/* <div className="tr-price"></div>
                  <div className="tr-price"></div> */}
                  <div className="tr-price"></div>
                  <div className="tr-price"></div>
                  <div className="tr-price"></div>
                  <div className="tr-price">
                    <span>5% de descuento</span>
                  </div>
                  <div className="button-pricing">
                    <button
                      onClick={() => {
                        window.open(
                          "https://app.homify.ai/registro-asesor",
                          "_blank"
                        );
                      }}
                    >
                      Prueba gratis
                    </button>
                  </div>
                </div>
                <div
                  className={`pricing-3 ${
                    selectInfoSubscription === 3 ? "select-pricing" : ""
                  }`}
                >
                  <div className="tab-pricing"></div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  {/* <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div> */}
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <IconCheckFill />
                  </div>
                  <div className="tr-price">
                    <span>15% de descuento</span>
                  </div>
                  <div className="button-pricing">
                    <button
                      onClick={() => {
                        window.open(
                          "https://app.homify.ai/registro-asesor",
                          "_blank"
                        );
                      }}
                    >
                      Prueba gratis
                    </button>
                  </div>
                </div>
              </TablePricing>
            </div>
          </PricingHomify>
          <WhyContractHomify />
          <ScreenshotSection
            openModal={(visible) => {
              setIsVisibleModal(visible);
            }}
          />
          <MessageToUser>
            <div className="text-to-user">
              <div style={{ textAlign: "center" }}>
                <svg
                  width="130"
                  height="39"
                  viewBox="0 0 130 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.8401 13.8476V36.4589"
                    stroke="#FF0083"
                    strokeWidth="5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M2.57257 21.0421V36.4589"
                    stroke="#FF0083"
                    strokeWidth="5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M3.09616 36.4589H29.8401"
                    stroke="#FF0083"
                    strokeWidth="5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M29.8402 13.8476L16.2064 2.54111"
                    stroke="#FF0083"
                    strokeWidth="5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M2.57257 13.8476L16.2064 2.54111"
                    stroke="#FF0083"
                    strokeWidth="5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M29.8402 15.3888C30.7087 15.3888 31.4128 14.6988 31.4128 13.8476C31.4128 12.9965 30.7087 12.3065 29.8402 12.3065C28.9716 12.3065 28.2675 12.9965 28.2675 13.8476C28.2675 14.6988 28.9716 15.3888 29.8402 15.3888Z"
                    fill="#FF0083"
                  />
                  <path
                    d="M16.2065 4.0823C17.075 4.0823 17.7791 3.3923 17.7791 2.54115C17.7791 1.69 17.075 1 16.2065 1C15.3379 1 14.6338 1.69 14.6338 2.54115C14.6338 3.3923 15.3379 4.0823 16.2065 4.0823Z"
                    fill="#FF0083"
                  />
                  <path
                    d="M2.57264 15.3888C3.44119 15.3888 4.14528 14.6988 4.14528 13.8476C4.14528 12.9965 3.44119 12.3065 2.57264 12.3065C1.7041 12.3065 1 12.9965 1 13.8476C1 14.6988 1.7041 15.3888 2.57264 15.3888Z"
                    fill="#FF0083"
                  />
                  <path
                    d="M2.57264 22.5833C3.44119 22.5833 4.14528 21.8933 4.14528 21.0421C4.14528 20.191 3.44119 19.501 2.57264 19.501C1.7041 19.501 1 20.191 1 21.0421C1 21.8933 1.7041 22.5833 2.57264 22.5833Z"
                    fill="#FF0083"
                  />
                  <path
                    d="M2.57264 38C3.44119 38 4.14528 37.31 4.14528 36.4588C4.14528 35.6077 3.44119 34.9177 2.57264 34.9177C1.7041 34.9177 1 35.6077 1 36.4588C1 37.31 1.7041 38 2.57264 38Z"
                    fill="#FF0083"
                  />
                  <path
                    d="M29.8402 38C30.7087 38 31.4128 37.31 31.4128 36.4588C31.4128 35.6077 30.7087 34.9177 29.8402 34.9177C28.9716 34.9177 28.2675 35.6077 28.2675 36.4588C28.2675 37.31 28.9716 38 29.8402 38Z"
                    fill="#FF0083"
                  />
                  <path
                    d="M127.902 32.8617C129.061 32.8617 130 31.9412 130 30.8057C130 29.6701 129.061 28.7496 127.902 28.7496C126.743 28.7496 125.804 29.6701 125.804 30.8057C125.804 31.9412 126.743 32.8617 127.902 32.8617Z"
                    fill="#FF0083"
                  />
                  <path
                    d="M46.3584 17.2425C47.8888 17.2425 49.0864 17.6745 49.9512 18.5386C50.816 19.4027 51.2478 20.6112 51.2466 22.1642V31.1181H46.6574V23.2118C46.6574 22.53 46.4925 22.002 46.1627 21.628C45.833 21.2516 45.3655 21.0652 44.7604 21.0652C44.4306 21.0549 44.1029 21.1205 43.8037 21.2568C43.5045 21.3931 43.242 21.5962 43.0374 21.8499C42.6001 22.3743 42.3815 23.0638 42.3815 23.9184V31.1181H37.7795V12.4752H42.3743V19.2044C43.285 17.8953 44.613 17.2413 46.3584 17.2425Z"
                    fill="#333333"
                  />
                  <path
                    d="M66.2355 29.6001C64.8622 30.9436 63.0806 31.6153 60.8907 31.6153C58.7008 31.6153 56.9198 30.9436 55.5477 29.6001C54.1768 28.2566 53.4913 26.5196 53.4913 24.3889C53.4913 22.2773 54.1768 20.5497 55.5477 19.2062C56.9186 17.8627 58.6996 17.1904 60.8907 17.1892C63.083 17.1892 64.8646 17.8615 66.2355 19.2062C67.6064 20.5509 68.2919 22.2784 68.2919 24.3889C68.2919 26.5196 67.6064 28.2566 66.2355 29.6001ZM58.8071 27.2919C59.2903 27.9737 59.9848 28.314 60.8907 28.3128C61.3012 28.3268 61.7089 28.2409 62.0772 28.0627C62.4455 27.8846 62.7631 27.6197 63.0014 27.2919C63.4846 26.629 63.7262 25.6602 63.7262 24.3854C63.7262 23.1295 63.481 22.1654 62.9906 21.4931C62.5002 20.8207 61.8008 20.4846 60.8925 20.4846C59.9854 20.4846 59.2909 20.8207 58.8089 21.4931C58.327 22.1654 58.0854 23.1295 58.0842 24.3854C58.0854 25.6626 58.3264 26.6326 58.8071 27.2955V27.2919Z"
                    fill="#333333"
                  />
                  <path
                    d="M87.207 17.1892C88.7036 17.1892 89.8837 17.6342 90.7473 18.5244C91.6109 19.4145 92.0427 20.6449 92.0427 22.2157V31.1181H87.448V23.0537C87.448 22.4092 87.2958 21.8979 86.9933 21.5232C86.8449 21.3382 86.6535 21.1906 86.4351 21.0926C86.2167 20.9947 85.9776 20.9494 85.7377 20.9604C85.4369 20.953 85.1387 21.0154 84.8673 21.1426C84.5958 21.2697 84.3589 21.4579 84.1759 21.6919C83.7737 22.1819 83.5732 22.8282 83.5744 23.6308V31.1181H78.9779V23.0537C78.9779 22.4092 78.8275 21.8979 78.5249 21.5232C78.3763 21.3384 78.1849 21.1909 77.9666 21.0931C77.7482 20.9952 77.5092 20.9497 77.2693 20.9604C76.9661 20.9502 76.6648 21.0112 76.3905 21.1385C76.1163 21.2658 75.8772 21.4555 75.6931 21.6919C75.2993 22.1819 75.1024 22.8282 75.1024 23.6308V31.1181H70.5095V17.6082H74.8379L74.9702 19.3109C75.8797 17.8905 77.1715 17.1833 78.8456 17.1892C80.7685 17.1892 82.131 17.9586 82.933 19.4974C83.9114 17.9598 85.3361 17.1904 87.207 17.1892Z"
                    fill="#333333"
                  />
                  <path
                    d="M99.5763 15.8807H94.9816V12.477H99.5763V15.8807ZM99.5763 31.1182H94.9816V17.6082H99.5763V31.1182Z"
                    fill="#333333"
                  />
                  <path
                    d="M110.795 15.6711H109.512C108.995 15.6711 108.63 15.78 108.416 15.9978C108.202 16.2156 108.095 16.5607 108.095 17.0329V17.6899L110.795 17.6118V20.5964L108.095 20.5183V31.1217H103.504V20.5414L101.448 20.5929V17.6082L103.504 17.6615V16.9513C103.504 13.966 105.161 12.474 108.474 12.4752H110.795V15.6711Z"
                    fill="#333333"
                  />
                  <path
                    d="M119 26.4839L121.591 17.6063H126.427L120.95 33.2628C120.522 34.4323 119.961 35.2573 119.267 35.7379C118.572 36.2185 117.602 36.4552 116.355 36.4481H113.203V32.7941H115.072C115.457 32.8162 115.841 32.7346 116.181 32.558C116.465 32.3686 116.676 32.0927 116.783 31.7732L116.917 31.4057L111.465 17.6081H116.411L118.519 24.0816L119 26.4839Z"
                    fill="#333333"
                  />
                  <path
                    d="M24.4772 19.1103C22.9263 23.2259 19.6017 31.0311 15.8241 31.7555C14.9963 31.892 14.1459 31.7427 13.418 31.333C11.0083 30.0013 9.34148 26.2053 8.39754 23.5526C9.88502 25.7951 12.6371 28.968 16.3568 27.8618C19.955 26.7859 22.8484 22.1837 24.4772 19.1103Z"
                    fill="#FF0083"
                  />
                </svg>
              </div>
              <h3>
                "Tu proceso de arrendamiento sin contacto 100% en linea, ahorra
                tiempo y protege tu salud.”
              </h3>
              <span>
                Ahora, con casos récord de COVID-19 debido a Omicron, nos
                complace trabajar en una tecnología que protege tu salud y la de
                tus seres queridos.
              </span>
            </div>
            <div className="city-scape-homify">
              <div className="cloud-1">
                <img src="./cloud-1.png"></img>
              </div>
              <div className="cloud-2">
                <img src="./cloud-2.png"></img>
              </div>
              <img
                style={{
                  width: "100%",
                }}
                src="./city-scape-homify.png"
              ></img>
            </div>
          </MessageToUser>
        </Content>
      </PrincipalContent>
    </>
  );
};

export async function getServerSideProps(context) {
  const responsePlace = await fetch(
    "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJVVURVpz_0YURVSLC3Cyad7E&language=es-ES&key=AIzaSyBwWOmV2W9QVm7lN3EBK4wCysj2sLzPhiQ",
    {
      method: "GET",
      headers: {
        accept: "*/*",
        conection: "keep-alive",
        origin: "*",
      },
    }
  );
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
  const responseResultPlace = await responsePlace.json();
  const responseJsonPlace = responseResultPlace.result;
  return {
    props: {
      dataReviews: {
        rating: responseJsonPlace.rating,
        reviews: responseJsonPlace.reviews,
      },
      dataPolicy: responseResult.response,
    },
  };
}

export default Home;
