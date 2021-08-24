import React, { ComponentType } from "react";
import { NextPageContext } from "next";
import LayoutDefault from "../../../layouts/LayoutDefault";
import { getCurrentLanguage } from "src/utils/server/getCurrentLanguage";

const withLayout = (WrappedComponent: ComponentType) => {
  const Wrapper = () => {
    return (
      <div> 
        <LayoutDefault>
          <WrappedComponent/>
        </LayoutDefault>
      </div>
    )
  }
  Wrapper.getInitialProps = (ctx: NextPageContext) => {
    getCurrentLanguage(ctx);
    return {
      
    };
  }
  return Wrapper;
}

export default withLayout;
