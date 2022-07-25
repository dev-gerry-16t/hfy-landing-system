import React, { useEffect, useState } from "react";
import Head from "next/head";
import PrincipalContent from "../sections/principalContent";
import CustomModal from "../components/modal";
import FormRegister from "../components/formRegister";
import TopInitialYourInterest from "../sections/tiopInitialYourInterest";

const Home = ({ dataPolicy }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  return (
    <>
      <Head>
        <title>Homify - polizas juridicas</title>
        <meta
          name="description"
          content="Vende, Renta y Adquiere documentos legales para bienes raíces con Homify."
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
            userType={null}
            policyType={null}
            amountPolicy={null}
          />
        </CustomModal>
        <div
          style={{
            height: "70px",
          }}
        ></div>
        <TopInitialYourInterest
          openModal={(visible) => {
            setIsVisibleModal(visible);
          }}
        />
      </PrincipalContent>
    </>
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
