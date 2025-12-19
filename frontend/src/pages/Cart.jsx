import { useState } from "react";
import { pizzaCart } from "../data/pizzas";
import { capitalize, formatPrice } from "../utils/format";
import { Container, Button } from "react-bootstrap";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increment = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const decrement = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <Container className="d-flex-column justify-content-start align-items-center py-5">
      <h2>Carrito de compras</h2>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex align-items-center my-3 border p-3 rounded"
        >
          <img src={pizza.img} width={80} className="me-3" alt={pizza.name} />

          <div className="flex-grow-1">
            <h4 className="m-2">{capitalize(pizza.name)}</h4>
            <p className="m-2">Precio: ${formatPrice(pizza.price)}</p>
          </div>

          <div className="d-flex align-items-center">
            <Button
              variant="outline-danger"
              onClick={() => decrement(pizza.id)}
            >
              -
            </Button>
            <span className="mx-2 fw-bold">{pizza.count}</span>
            <Button
              variant="outline-success"
              onClick={() => increment(pizza.id)}
            >
              +
            </Button>
          </div>

          <p className="ms-3 fw-bold">
            Total: ${formatPrice(pizza.price * pizza.count)}
          </p>
        </div>
      ))}

      <hr />
      <h3>Total a pagar: ${formatPrice(total)}</h3>

      <Button variant="dark">Pagar</Button>
    </Container>
  );
};

export default Cart;
