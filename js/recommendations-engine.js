// ====================== CONFIGURACIÓN ======================
const temas = {
  // ---- SEXTO GRADO ----
  "colors and shapes": {
    bajo: {
      min: 0,
      max: 50,
      recomendacion: "¡Vamos a reforzar! Hoy practicaremos los colores y formas con un juego interactivo. Dibuja un círculo rojo y un triángulo azul, luego nómbralos en voz alta."
    },
    medio: {
      min: 51,
      max: 80,
      recomendacion: "¡Bien hecho! Ahora describe 5 objetos de tu cuarto usando colores y formas. Ejemplo: 'La ventana es un rectángulo blanco'."
    },
    alto: {
      min: 81,
      max: 100,
      recomendacion: "¡Excelente! Crea una historia corta usando 8 colores y 4 formas diferentes. Graba un video explicándola en inglés."
    }
  },
  "School Supplies (Has/have)": {
    bajo: {
      min: 0,
      max: 50,
      recomendacion: "¡Empecemos! Mira alrededor: ¿Qué objetos tienes? Practica con frases como 'I have a pencil' y 'She has a notebook'. Haz una lista de 5 items."
    },
    medio: {
      min: 51,
      max: 80,
      recomendacion: "¡Vas mejorando! Escribe 10 oraciones sobre lo que tienen tus amigos/familia. Usa 'has' y 'have' correctamente. Ejemplo: 'My teacher has a red pen'."
    },
    alto: {
      min: 81,
      max: 100,
      recomendacion: "¡Dominaste esto! Inventa un diálogo entre dos personajes hablando de sus útiles escolares. Usa al menos 15 objetos diferentes."
    }
  },
  // ---- SÉPTIMO GRADO ----
  "Clothing": {
    bajo: {
      min: 0,
      max: 50,
      recomendacion: "¡Manos a la obra! Abre tu clóset y nombra cada prenda en inglés. Clasifícalas por temporada (summer/winter)."
    },
    medio: {
      min: 51,
      max: 80,
      recomendacion: "¡Buena base! Describe el outfit de 3 personas famosas o familiares. Incluye accesorios. Ejemplo: 'He is wearing a black jacket and sunglasses'."
    },
    alto: {
      min: 81,
      max: 100,
      recomendacion: "¡Eres un experto! Diseña tu tienda de ropa ideal: haz un catálogo con 20 items y sus precios en inglés. Grábate 'vendiendo' un outfit."
    }
  },
  "Stations": {
    bajo: {
      min: 0,
      max: 50,
      recomendacion: "¡Aprendamos juntos! Dibuja las 4 estaciones y escribe 3 características de cada una. Ejemplo: 'Winter is cold and snowy'."
    },
    medio: {
      min: 51,
      max: 80,
      recomendacion: "¡Buen progreso! Compara tu estación favorita con la que menos te guste. Usa comparativos: 'Summer is hotter than spring'."
    },
    alto: {
      min: 81,
      max: 100,
      recomendacion: "¡Impresionante! Escribe un forecast meteorológico para una semana, incluyendo ropa recomendada para cada día. Presentalo como en TV."
    }
  }
};

// ====================== FUNCIÓN PRINCIPAL ======================
function getRecomendacion(tema, puntaje) {
  // Validaciones
  if (!temas[tema]) {
    return `🔍 Tema no encontrado. Usa uno de estos:\n${Object.keys(temas).join("\n")}`;
  }
  if (puntaje < 0 || puntaje > 100) {
    return "❌ El puntaje debe estar entre 0 y 100";
  }

  // Obtener nivel
  const niveles = temas[tema];
  let nivel = "";
  if (puntaje <= 50) nivel = "bajo";
  else if (puntaje <= 80) nivel = "medio";
  else nivel = "alto";

  // Construir mensaje personalizado
  const recom = niveles[nivel].recomendacion;
  const emoji = nivel === "alto" ? "🌟" : nivel === "medio" ? "✨" : "🔍";
  
  return `${emoji} Para ${tema} (puntaje: ${puntaje}/100):\n${recom}\n\n💡 Tip: Tómate 15 minutos para esta actividad.`;
}

// ====================== EJEMPLOS DE USO ======================
console.log(getRecomendacion("Clothing", 75));
console.log(getRecomendacion("colors and shapes", 30));
console.log(getRecomendacion("Stations", 90));