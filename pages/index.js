import React, { useEffect, useState } from "react";
import PrincipalContent from "../components/principalContent";
import TopInitialSection from "../components/topInitialSection";
import MiddleInitialSection from "../components/middleInitialSection";
import PosterRegister from "../components/posterRegister";
import UserCommentSection from "../components/userCommentsSection";

const Home = () => {
  return (
    <PrincipalContent>
      <TopInitialSection />
      <MiddleInitialSection />
      <PosterRegister />
      <UserCommentSection />
    </PrincipalContent>
  );
};

export default Home;
