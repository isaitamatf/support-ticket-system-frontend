import Logo from "../../assets/logo.svg";

/**
 * @description Header Component
 * @returns {JSX}
 */
export const HeaderComponent: React.FC = () => {
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
};
