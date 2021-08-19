import React from "react";
import { node } from "prop-types";
import styled from "styled-components";
import {
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from "@bbc/gel-foundations/breakpoints";
import {
  GEL_SPACING_HLF,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_SPACING_QUIN,
} from "@bbc/gel-foundations/spacings";
import Brand from "./Brand";
import Navigation from "./Navigation";
import Footer from "./Footer";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.main`
  flex-grow: 1;
  padding-top: 24px;
  @media (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    margin: 0 ${GEL_SPACING_DBL} ${GEL_SPACING_TRPL};
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    margin: 0 ${GEL_SPACING_DBL} ${GEL_SPACING_QUIN};
    width: 100%; /* Needed for IE11 */
    margin: 0 auto ${GEL_SPACING_QUIN};
    max-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN};
    padding: 24px ${GEL_SPACING_DBL} 0;
  }
`;

const BrandExt = styled(Brand)`
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding: 0 0.5rem!;
  }
`;

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <BrandExt />
      <Navigation />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </PageWrapper>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
