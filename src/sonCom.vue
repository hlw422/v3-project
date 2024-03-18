<script setup>
//接收数据
const props=defineProps({
    message:String,
    count:Number
})
console.log(props)


const emit=defineEmits(['get-message'])
const sendMsg=()=>{
    emit('get-message','this is son msg')
}
</script>
<template>
    <div class="son">
        <h2>子组件</h2>
        <div>
            父组件传入的数据-{{message}}{{ count }}
        </div>
    </div>
    <div>
        <button @click="sendMsg">给父组件传消息1</button>
    </div>
</template>