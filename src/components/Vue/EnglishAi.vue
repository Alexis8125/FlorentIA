<template>
    <div>
      <h2>Evaluar Texto del Niño</h2>
      <textarea v-model="texto" placeholder="Escribe aquí..."></textarea>
      <button @click="evaluarTexto">Evaluar</button>
      <div v-if="respuesta">
        <h3>Resultado:</h3>
        <pre>{{ respuesta }}</pre>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const texto = ref('')
  const respuesta = ref(null)
  
  const evaluarTexto = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/evaluar/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ texto: texto.value })
      })
      const data = await res.json()
      respuesta.value = data.resultado
    } catch (err) {
      console.error('Error al conectar con la IA:', err)
    }
  }
  </script>
  
  <style scoped>
  textarea {
    width: 100%;
    min-height: 100px;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  