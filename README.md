# Contraplano Podcast

Aplicación web oficial para "Contraplano Podcast", construida con **React (Vite)** para el Frontend y **FastAPI (Python)** para el Backend, todo orquestado con **Docker**.

## Estructura del Proyecto
- `frontend/`: Aplicación React + Vite + TailwindCSS.
- `backend/`: API construida con FastAPI y SQLAlchemy. Base de datos en PostgreSQL.

## Tecnologías Utilizadas
- **Frontend:** React, Vite, Tailwind CSS v3, Framer Motion
- **Backend:** Python 3.10, FastAPI, SQLAlchemy, Pydantic v2, PostgreSQL
- **Infraestructura:** Docker y Docker Compose

## Despliegue Local con Docker

Asegúrate de tener [Docker](https://www.docker.com/) y Docker Compose instalados en tu computadora.

1. **(Opcional) Variables de entorno:** Puedes crear un archivo `.env` en la carpeta `backend` o la raíz si necesitas configurar credenciales o conexiones manuales, pero por defecto Docker Compose maneja la base de datos automáticamente.
2. En la raíz del proyecto, construye y levanta los contenedores:
   ```bash
   docker compose up -d --build
   ```
3. La aplicación estará lista y sirviéndose:
   - **Página principal:** [http://localhost](http://localhost)
   - **Panel de Administración:** [http://localhost/admin](http://localhost/admin)
   - **Documentación de la API (Swagger):** [http://localhost:8000/docs](http://localhost:8000/docs)

## Panel de Administración
La web incluye un administrador estático para gestionar los **Capítulos** y **Temas**, y poder visualizar los **Mensajes de Contacto** dejados por los usuarios. (Los miembros del equipo se gestionan directamente de forma estática en el código del frontend).

## Comandos Útiles

- **Detener los contenedores:** 
  ```bash
  docker compose down
  ```
- **Ver los registros (logs) en tiempo real:** 
  ```bash
  docker compose logs -f
  ```
- **Reiniciar todo limpiando la base de datos (¡Cuidado!):** 
  ```bash
  docker compose down -v
  ```
