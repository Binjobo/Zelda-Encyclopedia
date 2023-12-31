import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <p>
          <NavLink className="home" to="/">
            Home
          </NavLink>
        </p>
        <p>
          <NavLink to="/creatures">Creatures</NavLink>
        </p>
        <p>
          <NavLink to="/equipment">Equipments</NavLink>
        </p>
        <p>
          <NavLink to="/materials">Materials</NavLink>
        </p>
        <p>
          <NavLink to="/monsters">Monsters</NavLink>
        </p>
        <p>
          <NavLink to="/treasure">Treasures</NavLink>
        </p>
        <p>
          <NavLink className="fav" to="/favourites">
            Favourites
          </NavLink>
        </p>
      </ul>
    </nav>
  );
};

export default NavBar;
