<script setup lang="ts">
    import { ref } from 'vue'
    const currentInput = ref<string>('');
    const buttons = ref<string[]>([
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      'C'
    ])
  
    const handleButtonClick = (button: string) => {
      console.log('button => ', button)
      if (button === '=') {
        try {
          currentInput.value = eval(currentInput.value).toString();
        } catch (error) {
          currentInput.value = 'Error';
        }
      } else if (button === 'C') {
        currentInput.value = ''
      } else {
        currentInput.value += button;
      }
    }
</script>

<template>
    <div class="calculator">
      <div class="display">{{ currentInput }}</div>
      <div class="buttons">
        <button v-for="button in buttons" :key="button" @click="handleButtonClick(button)">
          {{ button }}
        </button>
      </div>
    </div>
</template>

<style scoped>
  .calculator {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .display {
    font-size: 24px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .buttons button {
    font-size: 18px;
    width: 60px;
    height: 60px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .buttons button:hover {
    background-color: #f0f0f0;
  }
</style>
  