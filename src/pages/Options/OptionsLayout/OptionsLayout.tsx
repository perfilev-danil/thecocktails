import OptionsList from "../OptionsList/OptionsList";
import { Outlet } from "react-router-dom";

const OptionsLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <OptionsList />
      <Outlet />
    </div>
  );
};

export default OptionsLayout;
