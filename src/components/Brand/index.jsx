import React from "react";
import styled from "styled-components";

import Brand from "@bbc/psammead-brand";

import brandSVG from "./ktp";

const BrandExt = styled(Brand)`
  a {
    padding-left: 4px;
  }
`;

const BrandContainer = () => {
  const svgMaxHeight = 32;
  const svgMinHeight = 40;
  const svgRatio = brandSVG && brandSVG.ratio;
  const minWidth = svgRatio * svgMinHeight;
  const maxWidth = svgRatio * svgMaxHeight;
  const bbcRed = "#b80000";

  return (
    <BrandExt
      backgroundColour={bbcRed}
      logoColour={bbcRed}
      product="news"
      serviceLocalisedName="The KP News"
      svgHeight={svgMaxHeight}
      minWidth={minWidth}
      maxWidth={maxWidth}
      svg={brandSVG}
      url="/"
      style={{ padding: 0 }}
    />
  );
};

export default BrandContainer;
