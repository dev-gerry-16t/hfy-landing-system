import React from "react";

const WidgetFunctionalities = ({ source, alt, width, height, children }) => {
  return (
    <div>
      <img src={source} alt={alt} width={width} height={height} />
      {children}
    </div>
  );
};

export default WidgetFunctionalities;
