import "./App.css";
import "./styles/cardProduct.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer gretting="Bienvenidos!" />
      <Footer />
    </>
  );
}

export default App;
