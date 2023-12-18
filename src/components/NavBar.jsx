import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/creatures">Creature</NavLink>
        </p>
        <p>
          <NavLink to="/equipment">Equipment</NavLink>
        </p>
        <p>
          <NavLink to="/materials">Materials</NavLink>
        </p>
        <p>
          <NavLink to="/monsters">Monsters</NavLink>
        </p>
        <p>
          <NavLink to="/treasure">Treasure</NavLink>
        </p>
      </ul>
    </nav>
  );
};

export default NavBar;
