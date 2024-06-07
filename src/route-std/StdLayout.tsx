import { Outlet, useNavigate } from "react-router-dom";
import React from "react";
import { useRootContext_FromOutletContext } from "../route-core/RootLayout";
import { StdFooter } from "./StdFooter";
import { DiagStamp } from "../components/Diagnostics";
import "../Common.css";

const StdLayout = () => {
  const navigate = useNavigate();
  const { rootContext } = useRootContext_FromOutletContext();

  React.useEffect(() => {
    console.log("StdLayout mounted");
    if (!rootContext.isUserLoggedIn) navigate("/default");
  }, []);

  // console.log('In StdLayout', diagConfig);

  return (
    <>
      <DiagStamp stampText="StdLayout" diagConfig={rootContext.diagConfig} />
      <div className="torso_flexitem torso_scroll_container">
        <div className="content_section">
          <Outlet context={{ rootContext }} />
        </div>
      </div>
      <StdFooter />
    </>
  );
};
//
export default StdLayout;
