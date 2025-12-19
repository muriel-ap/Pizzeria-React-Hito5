import { Link } from "react-router-dom";
import NotFoundImg from "../assets/404.png";
import { Container, Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="d-flex flex-column justify-content-start align-items-center gap-3">
    <img src={NotFoundImg} alt="404 Not Found Error" style={{maxWidth:"40%"}}/>
    <h1>Oops, No encontramos la página que buscas</h1>
    <Button as={Link} to="/" variant="dark"> Volver al inicio </Button>
    </Container>
  )
}

export default NotFound