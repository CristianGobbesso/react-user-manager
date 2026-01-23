Gestión de Usuarios / User Management App

📌 Descripción

Aplicación desarrollada con React que permite gestionar una lista de usuarios obtenidos desde una API externa. Incluye funcionalidades de búsqueda, eliminación de usuarios y manejo de estados de carga y error.

Este proyecto fue creado con el objetivo de practicar y demostrar conceptos fundamentales de React a nivel junior, con foco en una arquitectura clara, componentes reutilizables y buena experiencia de usuario.

⚙️ Funcionalidades

Obtener usuarios desde una API

Mostrar nombre y email de cada usuario

Buscar usuarios por nombre o email

Eliminar usuarios con confirmación previa

Resetear la búsqueda automáticamente al eliminar un usuario

Botón para limpiar la búsqueda manualmente

Manejo de estados de carga y error

🧱 Tecnologías utilizadas

React

JavaScript (ES6+)

CSS plano

Fetch API

📁 Estructura del proyecto
src/
 ├─ components/     # Componentes reutilizables
 ├─ pages/          # Vistas principales
 ├─ services/       # Lógica de acceso a datos (API)
 ├─ App.jsx
 ├─ App.css
 └─ index.css

🚀 Cómo ejecutar el proyecto

Clonar el repositorio

Instalar dependencias

npm install

Iniciar el proyecto

npm run dev

🌐 Demo

La aplicación está desplegada y disponible en:

👉 https://gestion-de-usuarios.netlify.app/

🧠 Notas

No se utiliza backend propio, las operaciones de borrado son simuladas en el estado local.



English:

📌 Description

This is a React application that allows managing a list of users fetched from an external API. It includes search, user deletion, and proper handling of loading and error states.

The project was built to practice and demonstrate junior-level React concepts, focusing on clean architecture, reusable components, and good user experience.

⚙️ Features

Fetch users from an external API

Display user name and email

Search users by name or email

Delete users with confirmation

Automatically reset search after deleting a user

Manual search reset button

Loading and error state handling

🧱 Technologies used

React

JavaScript (ES6+)

Plain CSS

Fetch API

📁 Project structure
src/
 ├─ components/     # Reusable components
 ├─ pages/          # Main views
 ├─ services/       # Data access logic (API)
 ├─ App.jsx
 ├─ App.css
 └─ index.css

🚀 How to run the project

-Clone the repository

-Install dependencies

npm install

-Start the project

npm run dev

🌐 Live Demo

The application is deployed and available at:

👉 https://gestion-de-usuarios.netlify.app/

🧠 Notes

No custom backend is used; delete operations are simulated in local state.