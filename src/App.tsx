import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router/router";
import Header from "./widgets/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
