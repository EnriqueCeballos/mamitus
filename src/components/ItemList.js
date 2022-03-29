import Item from "./Item.js";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <section className="galleryProduct">
      {items.length > 0 ? (
        items.map((item) => <Item item={item} key={item.id}></Item>)
      ) : (
        <div className="errorPage">
          <div className="containerError">
            <h2>Generando los archivos necesarios!</h2>
            <p>Si el problema persiste recarge la pagina</p>

            <Link
              to="/"
              href="https://www.flaticon.com/free-icons/reload"
              title="reload icons"
            ></Link>
          </div>
        </div>
      )}
    </section>
  );
};
export default ItemList;
