<script setup lang="ts">
    import { ref, watch } from 'vue'
    const email = ref('')
    const password = ref('')
    const isEmailValid = ref(false)
    const isPasswordValid = ref(false)

    watch(
        () => email.value,
        () => {
            console.log('email: ', email.value)
            isEmailValid.value = validateEmail(email.value)
        }
    )

    watch(
        () => password.value,
        () => {
            console.log('password: ', password.value)
            isPasswordValid.value = (password.value.length >= 6)
        }
    )

    const validateEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    const submitForm = () => {
        if (isEmailValid.value && isPasswordValid.value) {
            alert('SUCCES: Formulario enviado')
        } else {
            alert('ERROR: Formulario no cumple')
        }
    }
</script>

<template>
    <div class="login-form">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="email" type="email" id="email" />
          <p v-if="!isEmailValid">Ingrese un correo electrónico válido.</p>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input v-model="password" type="password" id="password" />
          <p v-if="!isPasswordValid">La contraseña debe tener al menos 6 caracteres.</p>
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
</template>

<style scoped>
  .login-form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  p {
    color: red;
    font-size: 14px;
    margin-top: 5px;
  }
</style>
  