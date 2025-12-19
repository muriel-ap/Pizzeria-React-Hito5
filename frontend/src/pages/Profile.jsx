import { Container,Button } from "react-bootstrap"

const Profile = () => {
  return (
    <Container className="d-flex-column justify-content-center aling-items-center py-5" style={{ maxWidth: "30%" }}>
     <h2>Mi cuenta</h2>
     <p style={{}}>Usuario: Winona Ryder</p>
     <p>Email: winonaforever@gmail.com</p>
     <Button variant="primary" >Cerrar sesión</Button>

    </Container>
  )
}

export default Profile