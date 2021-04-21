import React, { useEffect, useState } from "react";
import PrincipalContent from "../sections/principalContent";
import TopInitialSection from "../sections/topInitialSection";
import MiddleInitialSection from "../sections/middleInitialSection";
import PosterRegister from "../sections/posterRegister";
import UserCommentSection from "../sections/userCommentsSection";
import WhyContractHomify from "../sections/whyContractHomify";
import ScreenshotSection from "../sections/screenshotSection";
import CustomModal from "../components/modal";
import FormRegister from "../components/formRegister";

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
      />
      <div style={{ background: "#fff" }}>
        <MiddleInitialSection />
        <PosterRegister
          openModal={(visible) => {
            setIsVisibleModal(visible);
          }}
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
