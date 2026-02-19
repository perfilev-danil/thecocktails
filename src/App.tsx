import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router/router";
import Navbar from "./widgets/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
