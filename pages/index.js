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
