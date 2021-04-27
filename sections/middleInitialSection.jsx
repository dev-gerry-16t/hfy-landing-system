import React from "react";
import WidgetFunctionalities from "../components/widgetFunctionalities";
import SectionFunctionalities from "./sectionFuncionalities";

const MiddleInitialSection = ({
  subTitleSection,
  titleSection,
  title1,
  firstRow,
  secondRow,
}) => {
  return (
    <SectionFunctionalities
      subTitleSection={subTitleSection}
      titleSection={titleSection}
      title1={title1}
      children1={firstRow.map((row) => {
        return (
          <WidgetFunctionalities
            source={row.source}
            alt={row.alt}
            width={166}
            height={142}
          >
            {row.label}
            {row.pText}
          </WidgetFunctionalities>
        );
      })}
      title2="Solicita reparaciones, almacena documentos, paga tus servicios"
      children2={secondRow.map((row) => {
        return (
          <WidgetFunctionalities
            source={row.source}
            alt={row.alt}
            width={166}
            height={142}
          >
            {row.label}
            {row.pText}
          </WidgetFunctionalities>
        );
      })}
    />
  );
};

export default MiddleInitialSection;
