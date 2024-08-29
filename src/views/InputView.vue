<script setup>
  import { useStorage } from "@/composables/useStorage";
  let name = useStorage('name', 'Harsha');
  let age = useStorage('age', 27);
</script>

<template>
  <main>
    <p>
      What is your name? <input type="text" v-model="name">
      What is your age? <input type="text" v-model="age">
    </p>
  </main>
</template>