import React from "react";
import stylesMiddle from "../styles/middleSection.module.scss";
import stylesInfoServices from "../styles/cardServices.module.scss";

const SectionFunctionalities = ({
  subTitleSection,
  titleSection,
  title1,
  children1,
  title2,
  children2,
}) => {
  return (
    <>
      <section title={subTitleSection} className={stylesMiddle.middleMain}>
        {titleSection}
      </section>
      <div className={stylesInfoServices.contentCards}>
        <section title={title1} className={stylesInfoServices.cards}>
          {children1}
        </section>
        <section title={title2} className={stylesInfoServices.cards}>
          {children2}
        </section>
      </div>
    </>
  );
};

export default SectionFunctionalities;
