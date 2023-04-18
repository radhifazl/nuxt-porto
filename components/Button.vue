<script setup>
const props = defineProps({
    btnText: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['action'])

const startEmit = () => {
    emit('action')
}
</script>

<template>
    <button @click="startEmit" class="btn">
        {{ btnText }}
    </button>
</template>

<style scoped>
.btn {
    background-color: var(--primary-color);
    font-weight: var(--font-semibold);
    color: #fff;
    padding: 10px 3rem;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 20px 0;
}

.btn:hover {
    background-color: var(--darker-primary-color);
}
</style>