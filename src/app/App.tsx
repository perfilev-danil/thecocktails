import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "../widgets/Header/Header";
import AppRouter from "./providers/router/router";
import Footer from "../widgets/Footer/Footer";

function App() {
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
