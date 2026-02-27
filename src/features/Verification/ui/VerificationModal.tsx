import styles from "./VerificationModal.module.scss";
import { useAppDispatch } from "../../../app/providers/hooks/hooks";
import { setVerification } from "../model/verificationSlice";
import { createPortal } from "react-dom";

const VerificationModal = () => {
  const dispatch = useAppDispatch();
  return createPortal(
    <div
      className={styles.verification}
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-verification-title"
      aria-describedby="age-verification-description"
    >
      <div className={styles.verification__modal}>
        <header className={styles.verification__content}>
          <span id="age-verification-title">Age Verification Required</span>
          <p id="age-verification-description">
            This website contains alcoholic beverages.
          </p>
          <p>You must be at least 18 years old to continue.</p>
        </header>

        <footer className={styles.verification__buttons}>
          <button type="button" onClick={() => dispatch(setVerification(true))}>
            Yes, I am 18 or older
          </button>

          <button
            type="button"
            onClick={() => dispatch(setVerification(false))}
          >
            No, I am under 18
          </button>
        </footer>
      </div>
    </div>,
    document.body,
  );
};

export default VerificationModal;
