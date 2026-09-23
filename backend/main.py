from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import models
from database import engine
from routes import router

# Crear tablas en la BD
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Contraplano API")

# Configurar CORS para permitir que el frontend acceda
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción debería ser la URL del frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Contraplano API is running"}
