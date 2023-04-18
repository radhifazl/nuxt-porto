<script setup>
const props = defineProps({
    sectionTitle: {
        type: String,
        required: true
    }
})
</script>

<template>
    <h1 class="section-title mb-10">
        {{ sectionTitle }}
    </h1>
</template>


<style>
.section-title {
    font-size: var(--tfs-medium);
    font-weight: var(--font-medium);
    text-transform: uppercase;
}
</style>