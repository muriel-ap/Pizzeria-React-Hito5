import { Link } from "react-router-dom";
import { Navbar as BtNavbar, Nav, Button, Container } from "react-bootstrap";
import { formatPrice } from "../../utils/format";

const Navbar = () => {
  const total = 0;

  return (
    <BtNavbar bg="dark" expand="lg" variant="dark" style={{maxHeight:"60px"}}>
      <Container fluid className="d-flex justify-content-between">
        <Nav className="menu-iz align-items-center">
          <Nav.Link className="text-light fs-5 me-3" href="#">Pizzería Mamma Mia</Nav.Link>
          <Button as={Link} to="/" variant="outline-light" className="me-2">🍕 Home</Button>
          <Button as={Link} to="/Login" variant="outline-light" className="me-2">🔐 Login</Button>
          <Button as={Link} to="/Register" variant="outline-light" className="me-2">🔐 Register</Button>
        </Nav>
        <Nav className="menu-dr align-items-center">
          <Button as={Link} to="/Profile" variant="outline-light" className="me-2">🔓 Profile</Button>
          <Button as={Link} to="/Cart" variant="outline-info">🛒 Total: ${formatPrice(total)}</Button>
        </Nav>
      </Container>
    </BtNavbar>
  );
};

export default Navbar;