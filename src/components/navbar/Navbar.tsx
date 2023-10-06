
import "./navbar.css"
interface NavbarProps {
  items: string[];
  title: string;
}
function Navbar({ items, title, }: NavbarProps) {
  return (
    <>
      <nav className="navbar navbar-expand-lg lg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
       
            <ul className="navbar-nav">
            {items.map((item, index) => (
              <li className="nav-item">
                <a className="nav-link active" key={index} aria-current="page" href={item=='Shop'?"/":"/cart"}>
                  {item}
                </a>
                </li>
             ))}
            </ul>
        
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;