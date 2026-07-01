# Tienda Jolie - Ecommerce en React

Trabajo Práctico Final (Opción A) - Migración de un proyecto maquetado en HTML/CSS a React.

Jolie es una tienda de ropa y accesorios. El proyecto incluye catálogo de productos, registro e inicio de sesión de usuarios, y un formulario de contacto.

## 🛠️ Tecnologías utilizadas

- **React** (Vite)
- **React Router DOM** - navegación entre páginas
- **Bootstrap 5** - componentes visuales (carousel)
- **json-server** - API REST local para simular el backend

## 📁 Estructura del proyecto

EcommerceReact/
├── server/            → API local (json-server)
├── src/
│   ├── components/    → Componentes reutilizables (Navbar, Footer, Card, Gallery, Layout)
│   ├── pages/          → Páginas de la app (Home, Catalogo, Registro, Login, Contact)
│   ├── styles/          → Archivos CSS
│   ├── assets/          → Imágenes
│   └── hooks/           → Custom Hooks (useProducts)
└── public/

## 🚀 Cómo ejecutar el proyecto

Este proyecto tiene **dos partes que hay que levantar por separado y al mismo tiempo**: el frontend (React) y la API (json-server). Si solo levantás el frontend, la página de Catálogo y el registro de usuarios no van a funcionar.

### 1. Clonar el repositorio

```bash
git clone https://github.com/Valeria-s-v/jolie-ecommerce-react.git
cd jolie-ecommerce-react
```

### 2. Levantar la API (servidor local)

Abrí una terminal y ejecutá:

```bash
cd server
npm install
npm run dev
```

Esto deja la API corriendo en `http://localhost:3000`. **Dejá esta terminal abierta.**

### 3. Levantar el frontend

Abrí **otra terminal nueva** (sin cerrar la anterior), parado en la carpeta raíz del proyecto:

```bash
npm install
npm run dev
```

Esto va a mostrar una URL, generalmente `http://localhost:5173`. Abrila en el navegador.

### ✅ Resumen

| Terminal | Comando | Puerto |
|---|---|---|
| Terminal 1 (API) | `cd server` → `npm install` → `npm run dev` | 3000 |
| Terminal 2 (Frontend) | `npm install` → `npm run dev` | 5173 |

Las dos tienen que quedar corriendo al mismo tiempo para que la app funcione completa.

## 📄 Páginas disponibles

- `/` — Inicio
- `/catalogo` — Catálogo de productos (requiere la API corriendo)
- `/registro` — Registro de usuarios (requiere la API corriendo)
- `/login` — Inicio de sesión
- `/contacto` — Formulario de contacto
