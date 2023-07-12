import React from "react";
import Logo from "../../assets/logo.svg";

export function HeaderComponent() {
  return (
    <div className="sts-header">
      <div className="sts-header-img">
        <img alt="Logo" src={Logo} />
      </div>
      <div className="sts-header-span">
        <span>Support Ticket System</span>
      </div>
    </div>
  );
}
