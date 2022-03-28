import React, { useState, useEffect } from "react";
import isNil from "lodash/isNil";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import stylesHeader from "../styles/headSection.module.scss";
import styled from "styled-components";

const Footer = styled.footer`
  background: #282828;
  font-family: Poppins;
`;

const ContactLink = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    color: #ffffff;
  }
  p {
    color: #d9dbe1;
  }
  @media screen and (max-width: 570px) {
    font-size: 12px;
  }
  @media screen and (max-width: 420px) {
    justify-content: left;
  }
`;

const Navegation = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  padding: 2% 10%;

  @media screen and (max-width: 570px) {
    padding: 2% 10px;
  }
  @media screen and (max-width: 420px) {
    padding: 2% 5px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Address = styled.div`
  max-width: 315px;
  margin: 10px 0px;
  span {
    color: #d9dbe1;
    font-size: 16px;
  }
  @media screen and (max-width: 570px) {
    span {
      font-size: 12px;
    }
  }
`;
const LogoHomify = styled.div`
  @media screen and (max-width: 570px) {
    img {
      width: 150px;
    }
  }
`;

const GeneralInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 420px) {
    justify-content: left;
    align-items: flex-start;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  margin: 0px;
  cursor: pointer;
  outline: none;
`;

const BottomInformation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 7rem;
  @media screen and (max-width: 970px) {
    padding: 0px 1rem;
  }
  @media screen and (max-width: 470px) {
    justify-content: center;
  }
`;

const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 15px;
  position: fixed;
  background: #fff;
  z-index: 2;
  width: 100%;
  .short-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo-hfy {
    text-align: center;
  }
  @media screen and (max-width: 750px) {
    .short-navigation {
      display: none;
    }
  }
`;

const HeaderNavigation = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #18191f;
  a {
    margin: 0px 10px;
  }
`;

const SecondaryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .btn-register {
    border: none;
    font-family: Poppins;
    box-sizing: border-box;
    border-radius: 16px;
    background: #ff0282;
    padding: 2px 5px;
    margin: 0px 5px;
    outline: none;
    color: #fff;
    cursor: pointer;
  }
  .btn-login {
    border: 1px solid #ff0282;
    font-family: Poppins;
    box-sizing: border-box;
    border-radius: 16px;
    background: #fff;
    padding: 2px 5px;
    margin: 0px 5px;
    outline: none;
    color: #ff0282;
    cursor: pointer;
  }
  .btn-menu {
    background: transparent;
    border: none;
    outline: none;
    display: none;
  }

  @media screen and (max-width: 470px) {
    .btn-register {
      display: none;
    }
    .btn-login {
      display: none;
    }
    .btn-menu {
      display: block;
    }
  }
`;

const PrincipalContent = ({
  children,
  openModal,
  visibleFooter,
  userType = null,
}) => {
  const [isVisibleNav, setIsVisibleNav] = useState(false);

  useEffect(() => {
    if (isVisibleNav === true) {
      document.getElementById("id-side-menu-panel").style.width = "250px";
    } else if (isVisibleNav === false) {
      document.getElementById("id-side-menu-panel").style.width = "0px";
    }
  }, [isVisibleNav]);

  useEffect(() => {
    const badyBox = document.getElementsByTagName("main")[0];
    badyBox.addEventListener("click", () => {
      setIsVisibleNav(false);
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-169194787-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-169194787-1');
          `,
          }}
        /> */}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V3GXMT81EX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-V3GXMT81EX');
          `,
          }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-315229769"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'AW-315229769');
          `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-315229769/hslcCI-y6eoCEMmMqJYB',
                  'event_callback': callback
              });
              return false;
            }
          `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '221574086446727'); 
  fbq('track', 'PageView');
`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=221574086446727&ev=PageView&noscript=1"
          />
        </noscript>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <HeaderSection>
        <div className="short-navigation">
          <HeaderNavigation>
            <Link href="/asesor">
              <a>Asesor</a>
            </Link>
            <Link href="/poliza-juridica-de-arrendamiento">
              <a>Propietario</a>
            </Link>
            <Link href="/inquilino">
              <a>Inquilino</a>
            </Link>
          </HeaderNavigation>
        </div>
        <div className="logo-hfy">
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
        <SecondaryButton>
          <button
            className="btn-login"
            onClick={() => {
              window.location.href = "https://app.homify.ai";
            }}
          >
            Iniciar sesión
          </button>
          <button
            className="btn-register"
            onClick={() => {
              if (isNil(userType) === false && userType === 3) {
                window.location.href = "https://app.homify.ai/registro-asesor";
              } else {
                window.location.href = "https://app.homify.ai/registro";
              }
            }}
          >
            Registrarme
          </button>
          <button
            className="btn-menu"
            onClick={() => {
              setIsVisibleNav(!isVisibleNav);
            }}
          >
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 16.25H1"
                stroke="#4E4B66"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 8.75H1"
                stroke="#4E4B66"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 1.5H1"
                stroke="#4E4B66"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div id="id-side-menu-panel" className={stylesHeader.myLinks}>
            <Link href="/asesor">
              <a>Asesor</a>
            </Link>
            <Link href="/poliza-juridica-de-arrendamiento">
              <a>Propietario</a>
            </Link>
            <Link href="/inquilino">
              <a>Inquilino</a>
            </Link>
            <a href="https://app.homify.ai">Iniciar Sesión</a>
            <Link href="/">
              <a
                onClick={() => {
                  setIsVisibleNav(!isVisibleNav);
                  openModal(true);
                }}
              >
                Contáctame
              </a>
            </Link>
            <Link href="/aviso-de-privacidad">
              <a>Aviso de privacidad</a>
            </Link>
            <Link href="/terminos-y-condiciones">
              <a>Términos y Condiciones</a>
            </Link>
          </div>
        </SecondaryButton>
      </HeaderSection>
      <main>{children}</main>
      {isNil(visibleFooter) === true && (
        <Footer>
          <Navegation>
            <GeneralInformation>
              <div>
                <LogoHomify>
                  <img src="/homify-logo-v2.png" alt="Homify Mi Renta segura" />
                </LogoHomify>
                <Address>
                  <span>
                    Porfirio Diaz 32, Insurgentes San Borja, 03100, Benito
                    Juárez, CDMX
                  </span>
                </Address>
                <div className="social-media">
                  <Button
                    onClick={() => {
                      window.open(
                        "https://www.facebook.com/Homify-M%C3%A9xico-103177134820342",
                        "_blank"
                      );
                    }}
                  >
                    <img src="/Facebook.png" alt="Facebook" />
                  </Button>
                  <Button
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/homify-m%C3%A9xico-6526a81ab/",
                        "_blank"
                      );
                    }}
                  >
                    <img src="/LinkedIn.png" alt="LinkedIn" />
                  </Button>
                  <Button
                    onClick={() => {
                      window.open(
                        "https://www.instagram.com/homifyrentasegura/",
                        "_blank"
                      );
                    }}
                  >
                    <img src="/Instagram.png" alt="instagram" />
                  </Button>
                </div>
              </div>
            </GeneralInformation>
            <ContactLink>
              <div>
                <h3>Contacto</h3>
                <p>Tel: 55 6584 0419 </p>
                <p>
                  Whatsapp:{" "}
                  <a href="https://wa.me/5215537011025" target="_blank">
                    55 3701 1025
                  </a>{" "}
                </p>
                <p>
                  Mail:{" "}
                  <a href="mailto:contacto@homify.ai" target="_blank">
                    contacto@homify.ai
                  </a>
                </p>
              </div>
            </ContactLink>
            <ContactLink>
              <div>
                <h3>Acerca de Homify</h3>
                <p>
                  {" "}
                  <Link href="/aviso-de-privacidad">
                    <a>Aviso de privacidad</a>
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link href="/terminos-y-condiciones">
                    <a>Términos y Condiciones</a>
                  </Link>
                </p>
              </div>
            </ContactLink>
          </Navegation>
          <BottomInformation>
            <div style={{ color: "#D9DBE1", fontSize: 12 }}>
              © 2022 RENTAL PAYMENTS S.A. DE C.V. Todos los derechos reservados.
            </div>
          </BottomInformation>
        </Footer>
      )}
    </>
  );
};

export default PrincipalContent;
