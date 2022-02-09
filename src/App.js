import "./App.css";
import "./styles/cardProduct.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer gretting="Bienvenidos!" />
    </>
  );
}

export default App;
