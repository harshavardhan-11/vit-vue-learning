<script setup>
  import TabbableTextarea from "@/components/TabbableTextarea.vue";
  import { useStorage } from "@/composables/useStorage";
  import { ref } from "vue";
  // let comment = ref('initial textarea value');
  let comment = useStorage('comment', 'Sample comment');
</script>

<template>
  <main>
    <form>
      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px;" />
    </form>
  </main>
</template>
