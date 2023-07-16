<script setup>
import { pageObserver } from '~~/helpers/pageObserver';
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
    AOS.init({
        duration: 1000,
    })
})


const portfolioTarget = ref(null)

const skillIcons = [
    'html', 'javascript', 'css',
    'bootstrap','vue', 'tailwind', 'nuxt', 'react',
    'next', 'firebase', 'laravel', 'sql'
]

onMounted(() => {
    pageObserver(portfolioTarget, 'portfolio-id', 'portfolio');
})
</script>

<template>
    <div class="container relative" id="portfolio">
        <SectionTitle section-title="Portfolio"/>

        <div class="portfolio w-full flex items-start gap-10">
            <div class="portfolio-content skills-section w-1/2 h-96">
                <h1 class="skills-title">Skills</h1>
                
                <div class="skills w-2/4 mt-5 h-full">
                    <div class="skill-icons" v-for="(icon, i) in skillIcons" :key="i">
                        <img :src="'/icons/'+ icon +'.png'" :alt="icon" :title="icon">
                    </div>
                </div>
            </div>

            <div class="portfolio-content projects-section w-1/2 h-96">
                <h1 class="projects-section-title">Projects</h1>

                <div class="projects mt-5 h-full">
                    <ProjectSlider />
                </div>
            </div>
        </div>
        <div class="target absolute" ref="portfolioTarget"></div>
    </div>
</template>

<style>
@media screen and (max-width: 868px) {
    .portfolio {
        flex-direction: column;
        justify-content: center;
        gap: 7rem;
    }

    .portfolio-content {
        width: 100%;
    }

    .skills {
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 3rem;
    }
}

.portfolio-content h1 {
    font-size: var(--tfs-small);
}

.skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 2rem;
}
</style>