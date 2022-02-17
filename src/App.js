import "./App.css";
import "./styles/cardProduct.css";
import "./styles/detailsItems.css";
import "./styles/footer.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/item" element={<ItemDetailContainer />}></Route>
          <Route
            path="/categoria/:idCategory"
            element={<ItemListContainer />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
