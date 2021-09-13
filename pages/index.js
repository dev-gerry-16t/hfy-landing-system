import React, { useEffect, useState } from "react";
import PrincipalContent from "../sections/principalContent";
import CustomModal from "../components/modal";
import FormRegister from "../components/formRegister";
import TopInitialYourInterest from "../sections/tiopInitialYourInterest";

const Home = ({ dataPolicy }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  return (
    <PrincipalContent
      openModal={(visible) => {
        setIsVisibleModal(visible);
      }}
      visibleFooter={false}
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
      <TopInitialYourInterest
        openModal={(visible) => {
          setIsVisibleModal(visible);
        }}
      />
    </PrincipalContent>
  );
};

Home.getInitialProps = async (ctx) => {
  let ENVIRONMENT = "http://localhost:3001";
  if (process.env.ENVIRONMENT === "prod") {
    ENVIRONMENT = "https://api.homify.ai";
  } else if (process.env.ENVIRONMENT === "test") {
    ENVIRONMENT = "https://apitest.homify.ai";
  } else {
    ENVIRONMENT = "http://localhost:3001";
  }

  const response = await fetch(`${ENVIRONMENT}/api/catalogs/getAllPolicies`, {
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
  });
  const responseResult = await response.json();
  return { dataPolicy: responseResult.response };
};

export default Home;
