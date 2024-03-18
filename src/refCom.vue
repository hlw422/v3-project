<script setup>
import {ref, onMounted } from 'vue';
import test_com  from './test_com.vue'
  const h1ref=ref(null)
  const testComref=ref(null)
  onMounted(()=>{
  console.log(h1ref.value)
  console.log(testComref.value)
  })
</script>
<template>
    <div>
        <h1 ref="h1ref">我是h1</h1>
    </div>
    <div>
        <test_com ref="testComref"/>
    </div>
</template>