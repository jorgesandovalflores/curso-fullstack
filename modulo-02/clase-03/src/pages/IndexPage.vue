<script setup lang="ts">
    import { useRouter } from 'vue-router'
    const router = useRouter()
    const loremText: string = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    `;
    const login = () => {
        router.push({
            name: 'Login'
        })
    }
</script>

<template>
    <div>
    <nav>
      <div class="nav-container">
        <div class="nav-left">
          <!-- Espacio en blanco a la izquierda -->
        </div>
        <div class="nav-right">
          <button @click="login" class="login-button">Iniciar sesión</button>
        </div>
      </div>
    </nav>
    <div class="content">
      <h1>Bienvenido a Nuestra Tienda Virtual</h1>
      <p>{{ loremText }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Estilos para la barra de navegación */
nav {
  background-color: #333;

  top: 0;
  width: 100%;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.nav-left {
  /* Espacio en blanco a la izquierda */
}

.nav-right {
  margin-right: 20px; /* Margen a la derecha del botón de inicio de sesión */
}

.login-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #d32f2f;
}

/* Estilos para el contenido */
.content {
  max-width: 800px;
  margin: 80px auto 0;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 32px;
}

p {
  font-size: 18px;
  line-height: 1.6;
}
</style>