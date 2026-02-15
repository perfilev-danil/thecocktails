import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router/router";
import Categories from "./pages/Home/Categories/Categories";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Categories />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
