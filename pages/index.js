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

const Home = () => {
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
        />
      </CustomModal>
      <TopInitialSection
        openModal={(visible) => {
          setIsVisibleModal(visible);
        }}
      />
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
    </PrincipalContent>
  );
};

export default Home;
