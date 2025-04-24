# backend/main.py
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from transformers import pipeline

app = FastAPI()

# CORS para permitir conexión desde tu frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cambiar a tu dominio en producción
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cargar modelo de análisis (puede tardar al inicio)
modelo = pipeline("text-classification", model="distilbert-base-uncased-finetuned-sst-2-english")

@app.get("/")
def home():
    return {"message": "FlorentIA IA está activa"}

@app.post("/evaluar")
async def evaluar(request: Request):
    data = await request.json()
    texto = data.get("texto")
    resultado = modelo(texto)
    return {"resultado": resultado}
