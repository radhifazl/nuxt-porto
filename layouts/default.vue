<script setup>

</script>

<template>
        <Navbar />
        <div class="content w-full overflow-x-hidden bg-gray-50">
            <slot />
        </div>
</template>

<style scoped>
/* .content {
    height: 100%;
    min-height: 100vh;
    background-color: red;
} */
</style>