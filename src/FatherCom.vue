<script setup>
import { ref } from "vue";
import sonCom from "./sonCom.vue";

const count = ref(100);

setTimeout(() => {
    count.value=200
}, 3000);
</script>
<template>
  <div class="father">
    <h2>父组件</h2>
    <sonCom :count="count" message="father message" />
  </div>
</template>
