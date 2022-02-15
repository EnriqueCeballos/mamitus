import "./App.css";
import "./styles/cardProduct.css";
import "./styles/detailsItems.css";
import "./styles/footer.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemDetailContainer />
      {/* <ItemListContainer gretting="Bienvenidos!" /> */}
      <Footer />
    </>
  );
}

export default App;
