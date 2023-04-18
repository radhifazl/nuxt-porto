<script setup>
const isActive = ref(false)
</script>

<template>
    <div class="navbar-wrapper w-full bg-white" :class="{'active': isActive}">
        <div class="navbar-header px-7 py-4">
            <div class="navbar-logo">
                <h1>difazl</h1>
            </div>

            <div class="navbar-menu" @click="isActive = !isActive">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>

        <div class="navbar-links w-1/3 py-4">
            <ul class="w-full px-10">
                <li id="home-id"><NuxtLink to="/">Home</NuxtLink></li>
                <li id="portfolio-id"><NuxtLink to="#portfolio">Portfolio</NuxtLink></li>
                <li id="services-id"><NuxtLink to="#services">Services</NuxtLink></li>
                <li id="contacts-id"><NuxtLink to="#contacts">Contacts</NuxtLink></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
@media screen and (min-width: 768px) {
    .navbar-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .navbar-links ul {
        display: flex;
        justify-content: space-between;
        gap: 3rem;
        padding-left: 0;
        padding-right: 4rem;
    }

    .navbar-menu {
        display: none;
    }

}

@media screen and (max-width: 768px) {
    .navbar-links {
        position: fixed;
        top: 0;
        left: 0;
        width: 80%;
        background-color: #FFF;
        height: 100vh;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        padding-top: 4rem;
        transform: translateX(-10rem);
        opacity: 0;
        transition: all 0.35s ease-in-out;
    }

    .active .navbar-links {
        transform: translateX(0);
        opacity: 1;
    }

    .navbar-links ul li {
        margin-bottom: 2rem;
    }
}



.navbar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.navbar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}



.navbar-menu {
    width: 28px;
    height: 28px;
    cursor: pointer;
}

.navbar-menu .bar {
    display: block;
    width: 100%;
    height: 12%;
    background-color: var(--font-color);
    margin: 5px 0;
    transition: 0.4s;
}

.navbar-menu:hover .bar {
    background-color: var(--darker-primary-color);
}

.active .bar:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.active .bar:nth-child(2) {
    opacity: 0;
}

.active .bar:nth-child(3) {
    transform: rotate(45deg) translate(-6px, -6px);
}
.navbar-logo h1 {
    font-weight: var(--font-bold);
    color: var(--darker-primary-color);
    font-size: 32px;
}

.navbar-links ul li {
    list-style: none;
    font-size: 16px;
    font-weight: var(--font-medium);
    color: var(--font-color);
    transition: 0.2s;
}
.navbar-links ul li:hover {
    color: var(--darker-primary-color);
}

.navbar-links ul li.active {
    color: var(--darker-primary-color);
}
</style>