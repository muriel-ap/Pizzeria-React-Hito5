import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import AlertsUi from "../components/ui/AlertsUi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
     if (!email || !password) {
      setAlert({
        type:"error",
        text:"❌ Todos los campos son obligatorios."});
      return;
    }

    if (password.length < 6) {
      setAlert({
        type:"error",
        text:"❌ La contraseña debe tener al menos 6 caracteres."});
      return;
    }

    setAlert({
      type:"success",
      text:"✅ Ingreso exitoso!"});

    setEmail("");
    setPassword("");
  };

  return (
    <Container className="d-flex-column justify-content-center aling-item-center py-5" style={{ maxWidth: "30%" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit" variant="primary">Login</Button>
      </form>

            {alert && (
  <AlertsUi
    type={alert.type}
  >
    {alert.text}
  </AlertsUi>
)}
    </Container>
  );
};

export default Login;