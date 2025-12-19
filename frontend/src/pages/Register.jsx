import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import AlertsUi from "../components/ui/AlertsUi";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
     if (!email || !password || !confirmPassword) {
      setAlert({
    type: "error",
    text: "❌ Todos los campos son obligatorios.",
  });
      return;
    }

    if (password.length < 6) {
      setAlert({
        type: "error",
        text: "❌ La contraseña debe tener al menos 6 caracteres."});
      return;
    }

    if (password !== confirmPassword) {
      setAlert({
        type: "error",
        text:"❌ Las contraseñas no coinciden."});
      return;
    }

    setAlert({
      type:"success",
      text:"✅ Registro exitoso!"});

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Container className="d-flex-column justify-content-start align-items-center py-5" style={{ maxWidth: "30%" }}>
      <h2>Registro</h2>
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

        <div className="mb-3">
          <label htmlFor="password">Confirmar Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <Button type="submit" variant="primary">Enviar</Button>
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

export default Register;