<script setup>

import {onMounted}from 'vue'

onMounted(()=>
{
    console.log('onMounted执行了  1')
})
// 多个也会执行
onMounted(()=>
{
    console.log('onMounted执行了  2')
})
</script>
<template>
    <div></div>
</template>