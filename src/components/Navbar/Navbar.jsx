import { Link, List } from './Navbar.styled';

function Navbar() {
  return (
    <nav>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </List>
    </nav>
  );
}

export default Navbar;
