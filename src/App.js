import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/">
          <Cart />
        </Route>
      </>
    </BrowserRouter>
  );
}

export default App;
