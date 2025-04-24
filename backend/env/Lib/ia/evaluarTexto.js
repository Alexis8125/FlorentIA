export async function evaluarTexto(texto) {
    const res = await fetch('http://localhost:8000/evaluar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ texto })
    })
    const data = await res.json()
    return data.resultado
  }
  