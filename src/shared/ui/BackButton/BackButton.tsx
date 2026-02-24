import styles from "./BackButton.module.scss";
import { useNavigate } from "react-router-dom";
import backIcon from "../../../assets/ui/back.svg";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.backButton} onClick={() => navigate(-1)}>
      <img className={styles.backButton__icon} src={backIcon} />
    </button>
  );
};

export default BackButton;
