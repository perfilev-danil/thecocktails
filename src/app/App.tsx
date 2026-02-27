import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "../widgets/Header/Header";
import AppRouter from "./providers/router/router";
import Footer from "../widgets/Footer/Footer";
import { useAppSelector } from "./providers/hooks/hooks";
import VerificationModal from "../features/Verification/ui/VerificationModal";

function App() {
  const isAdult = useAppSelector((state) => state.verification.isAdult);
  if (!isAdult) {
    return <VerificationModal />;
  }
  return (
    <BrowserRouter>
      <Header />
      <main className={styles.main}>
        <AppRouter />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
