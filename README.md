# 💻 Hito 5 Módulo React: Pizzería Mamma Mía.

## 📝 Descripción
Configuración de React Router, realizando las instalaciones necesarias y definiendo la estructura de navegación de la aplicación.

Se reorganizó el proyecto trasladando los componentes Home, Register, Login, Cart y Pizza a la carpeta pages, separando las vistas principales de los componentes reutilizables.

- **Se implementaron las siguientes rutas**:
  - / → Home
  - /register → Register
  - /login → Login
  - /cart → Cart
  - /pizza/p001 → Pizza
  - /profile → Profile
  - /404 → NotFound

- **NotFound.jsx**:
  - Se creó un componente NotFound, que se renderiza cuando el usuario accede a una ruta inexistente. Esta vista incluye un enlace que permite volver a la página principal

- **Profile.jsx**:
  - muestra de forma estática el email y usuario y un botón para cerrar sesión, dejando la lógica de autenticación para hitos posteriores

- **Navbar.jsx**
 - Navbar con un menú de navegación que utiliza Link de React Router para redirigir a las distintas rutas de la aplicación. El botón 🛒 Total: $x permite acceder directamente a la vista del carrito.




