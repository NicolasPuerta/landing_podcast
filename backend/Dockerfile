FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Exponer el puerto por defecto de FastAPI, pero permitir sobreescritura (para Render/Railway)
ENV PORT=8000
EXPOSE $PORT

# Comando para sembrar la base de datos y luego iniciar el servidor
CMD sh -c "python seed.py && uvicorn main:app --host 0.0.0.0 --port $PORT"
