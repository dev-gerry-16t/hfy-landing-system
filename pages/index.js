import React, { useEffect, useState } from "react";
import PrincipalContent from "../sections/principalContent";
import TopInitialSection from "../sections/topInitialSection";
import MiddleInitialSection from "../sections/middleInitialSection";
import PosterRegister from "../sections/posterRegister";
import UserCommentSection from "../sections/userCommentsSection";
import WhyContractHomify from "../sections/whyContractHomify";

const Home = () => {
  return (
    <PrincipalContent>
      <TopInitialSection />
      <MiddleInitialSection />
      <PosterRegister />
      <WhyContractHomify />
      <UserCommentSection />
    </PrincipalContent>
  );
};

export default Home;
