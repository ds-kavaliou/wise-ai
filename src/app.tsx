export function App() {
  return (
    <nav className="nav">
      <input type="checkbox" id="menuToggle" className="menu-toggle" />
      <label htmlFor="menuToggle" className="hamburger">
        ☰ Menu
      </label>
      <ul className="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
