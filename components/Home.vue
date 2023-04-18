<script setup>
import { pageObserver } from '~~/helpers/pageObserver';

const homeTarget = ref(null)

onMounted(() => {
    pageObserver(homeTarget, 'home-id', 'home');
})
</script>

<template>
    <div class="home container relative" id="home">
        <div class="home-text">
            <h2 class="job" data-aos="fade-down">Front-End Developer</h2>
            <h1 class="name">Radhif <span>Azli</span></h1>
            <p class="about">
                A frontend developer with one year of experience and with a high passionate to 
                create user-friendly and beautiful websites
            </p>
            <a href="/files/CV.pdf" download>
                <Button btnText="Get CV"/>
            </a>
        </div>
        <div class="profile-image absolute">
            <img src="~~/assets/images/me.png" alt="Self Portrait">
        </div>
        <div class="target absolute" ref="homeTarget"></div>
    </div>
</template>

<style>
.home {
    display: flex;
    align-items: center;
    height: fit-content;
}

.home::before {
    content: '';
    position: absolute;
    top: 0;
    right: 5%;
    width: 30%;
    height: 100%;
    background: var(--primary-color);
    z-index: 1;
}

.home-text .job {
    font-size: 26px;
    line-height: 0;
    font-weight: var(--font-light);
    letter-spacing: 3px;
}

.home-text .name {
    font-size: 138px;
    font-weight: var(--font-bold);
    margin-left: -10px;
}

.home-text .name span {
    color: var(--darker-primary-color);
}

.home-text .about {
    width: 63%;
    font-size: 20px;
    font-weight: var(--font-light);
    margin-top: -1.5rem;
}

.profile-image {
    position: absolute;
    bottom: 0;
    right: -10%;
    width: 60%;
    height: 130%;
    overflow: hidden;
    z-index: 2;
}

.profile-image img {
    width: 1000px;
    height: 100%;
    object-fit: cover;
}

@media screen and (max-width: 768px) {
    .home {
        justify-content: center;
        z-index: 100;
        overflow: hidden;
    }

    .home::before {
        width: 100%;
        height: 20%;
        right: 0;
        top: 90%;
        z-index: -1;
    }

    .home-text {
        margin-left: -0.5rem;
    }

    .home-text .job {
        font-size: 20px;
    }

    .home-text .name {
        font-size: 90px;
        line-height: 2.5cm;
        margin: 2.5rem 0;
    }

    .home-text .about {
        width: 100%;
        font-size: 16px;
    }

    .profile-image {
        bottom: -10%;
        width: 70%;
        height: 70%;
        overflow: hidden;
        pointer-events: none;
        z-index: -1;
    }
}

</style>