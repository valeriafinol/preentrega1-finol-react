import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <ItemListContainer greeting="Bienvenido a La Tiendita" />
      </div>
    </>
  );
}

export default App;
