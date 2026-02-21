import { BrowserRouter } from "react-router-dom";
import Header from "../widgets/Header/Header";
import AppRouter from "./router/router";
import Footer from "../widgets/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
