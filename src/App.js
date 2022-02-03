import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      {/* RECORREMOS EL ARRAY PARA TRAER TODOS LOS ELEMENTOS DEL MISMO */}
      {/* {data.map((items) => (
        <Video
          thumbnail={items.thumbnail}
          tittle={items.tittle}
          dataAdded={items.dataAdded}
          channel={items.channel}
          description={items.description}
        />
      ))} */}
    </>
  );
}

export default App;
