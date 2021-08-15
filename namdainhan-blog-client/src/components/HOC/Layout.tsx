import React, { ComponentType } from "react";
import { NextPageContext } from "next";
import LayoutDefault from "../../../layouts/LayoutDefault";

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
    console.log(ctx);
    return {
      
    };
  }
  return Wrapper;
}

export default withLayout;
