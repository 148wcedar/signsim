import { Outlet, useOutletContext } from "react-router-dom";
import React from "react";
import { DiagConfig, DiagStamp } from "../components/Diagnostics";
import "../Common.css";

export interface RootContext {
  isUserLoggedIn: boolean;
  diagConfig: DiagConfig;
}

export function useRootContext_FromOutletContext() {
  return useOutletContext<{ rootContext: RootContext }>();
}

export function RootLayout() {
  const [rootContext] = React.useState<RootContext>({
    //
    isUserLoggedIn: false,
    diagConfig: {
      showLayoutNames: true,
      logOnRender: true,
    },
  }); 

  //console.log('In RootLayout');

  return (
    <div className="page_frame">
      <DiagStamp stampText="RootLayout" diagConfig={rootContext.diagConfig} />
      <Outlet context={{ rootContext }} />
    </div>
  );
} // RootLayout()
