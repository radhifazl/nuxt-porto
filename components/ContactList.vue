<script setup>
const props = defineProps({
    hideName: {
        type: Boolean,
        default: false
    }
})

const contacts = [
    {
        icon: 'linkedin.svg',
        link: 'https://www.linkedin.com/in/radhifazli/',
        username: 'Radhif Azli Nurfahriza'
    },
    {
        icon: 'github.svg',
        link: 'https://github.com/radhifazl',
        username: 'radhifazl'
    },
    {
        icon: 'telegram.svg',
        link: 'https://t.me/radhifazl',
        username: 'radhifazl'
    },
    {
        icon: 'whatsapp.svg',
        link: 'https://wa.link/jctni4',
        username: '083819801472'
    },
]
</script>

<template>
    <div class="contact-info w-full p-5 bg-white rounded-md my-3">
        <div class="socials my-4" v-for="(contact, i) in contacts" :key="i">
            <a :href="contact.link" target="_blank" class="flex items-center gap-5">
                <img :src="'/icons/'+contact.icon" :alt="contact.icon">
                <h1 :hidden="hideName">{{ contact.username }}</h1>
            </a>
        </div>
    </div>
</template>

<style>
.contact-info {
    border: 1px solid rgba(136, 136, 136, 0.507);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.socials a img {
    width: 50px;
}
</style>