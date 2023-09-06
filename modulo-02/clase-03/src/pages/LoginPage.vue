<script setup lang="ts">
  import { ref } from 'vue'

  const email = ref('')
  const password = ref('')
  const login = async () => {}
</script>

<template>
  <!-- Contenedor principal -->
  <div class="login-container">
        <!-- Encabezado -->
        <h1>Iniciar Sesión</h1>
        <!-- Formulario de inicio de sesión -->
        <form @submit.prevent="login">
            <!-- Etiqueta y campo de entrada para el usuario -->
            <div class="form-group">
                <label for="username">Usuario:</label>
                <input type="text" id="username" name="username" v-model="email" required>
            </div>
            <!-- Etiqueta y campo de entrada para la contraseña -->
            <div class="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" v-model="password" required>
            </div>
            <!-- Botón de inicio de sesión -->
            <button type="submit">Iniciar Sesión</button>
        </form>
    </div>
</template>

<style scoped>
/* Estilo para el cuerpo del documento */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f8f9fa; /* Color de fondo */
    font-family: Arial, sans-serif;
}

/* Estilo para el contenedor del formulario */
.login-container {
    background-color: #fff; /* Color de fondo del contenedor */
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra */
    text-align: center;
    width: 300px; /* Ancho del contenedor */
}

/* Estilo para el encabezado */
h1 {
    margin-bottom: 20px;
    color: #007bff; /* Color del encabezado */
}

/* Estilo para el formulario */
form {
    margin-top: 10px;
}

/* Estilo para cada grupo de etiqueta y campo de entrada */
.form-group {
    margin-bottom: 15px; /* Espacio entre grupos */
    text-align: left; /* Alineación de texto a la izquierda */
}

/* Estilo para etiquetas */
label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold; /* Texto en negrita */
}

/* Estilo para campos de entrada de texto y contraseña */
input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box; /* Incluye el padding en el ancho */
}

/* Estilo para el botón de inicio de sesión */
button {
    background-color: #007bff; /* Color de fondo del botón */
    color: #fff; /* Color del texto del botón */
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
    transition: background-color 0.3s ease; /* Transición suave */
}

/* Estilo para el botón de inicio de sesión al pasar el mouse */
button:hover {
    background-color: #0056b3; /* Cambio de color al pasar el mouse */
}
</style>
