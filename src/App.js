import "./App.css";
import "./styles/cardProduct.css";
import "./styles/detailsItems.css";
import "./styles/footer.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/item/:idItem" element={<ItemDetailContainer />}></Route>
          <Route
            path="/categoria/:idCategory"
            element={<ItemListContainer />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
