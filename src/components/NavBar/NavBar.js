import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="container">
      <div>
        <h1>La Tiendita</h1>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
          <div>
            <CartWidget
              src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              alt="cart"
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
