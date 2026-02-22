//import styles from "./OptionsLayout.module.scss";
import OptionsList from "../OptionsList/OptionsList";
import { Outlet } from "react-router-dom";

const OptionsLayout = () => {
  return (
    <>
      <OptionsList />
      <Outlet />
    </>
  );
};

export default OptionsLayout;
