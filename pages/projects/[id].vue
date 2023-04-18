<script setup>
import { onMounted } from 'vue';

const route = useRoute()

useHead({
    title: `Radhif Azli | Project ${route.params.id}`,
    meta: [
        {
            name: 'description',
            content: 'A frontend developer with one year of experience and with a high passionate to create user-friendly and beautiful websites'
        },
        {
            name: 'keywords',
            content: 'radhif azli, radhif, azli, frontend developer, front-end developer, web developer, web designer, web developer malaysia, web designer malaysia, frontend developer malaysia, front-end developer malaysia, frontend developer kuala lumpur, front-end developer kuala lumpur, frontend developer selangor, front-end developer selangor, frontend developer penang, front-end developer penang, frontend developer johor, front-end developer johor, frontend developer perak, front-end developer perak, frontend developer kedah, front-end developer kedah, frontend developer kelantan, front-end developer kelantan, frontend developer sabah, front-end developer sabah, frontend developer sarawak, front-end developer sarawak, frontend developer terengganu, front-end developer terengganu, frontend developer pahang, front-end developer pahang, frontend developer negeri sembilan, front-end developer negeri sembilan, frontend developer melaka, front-end developer melaka, frontend developer perlis, front-end developer perlis, frontend developer labuan, front-end developer labuan, frontend developer putrajaya, front-end developer putrajaya'
        },
        {
            name: 'author',
            content: 'Radhif Azli'
        },
    ]
})

const project = ref([])

onMounted(() => {
    const projects = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : []
    project.value = projects.find(project => project.slug === route.params.id)
})

</script>
<template>
    <div class="container project-container overflow-hidden grid place-items-center">
            <div class="project-card">
                <div class="project-image w-1/2">
                    <img :src="'/images/projects/'+project.img" :alt="project.title">
                </div>

                <div class="project-detail relative w-1/2 p-5 h-full">
                    <h1 class="project-title">{{ project.title }}</h1>

                    <p class="project-desc">
                    {{ project.desc }}
                    </p>

                    <div class="project-action w-full">
                    <div class="stacks flex flex-wrap items-center gap-3 mb-5 w-full">
                        <div class="stack-icon p-2 rounded-md bg-white" v-for="(stack, i) in project.stacks" :key="i">
                        <img :src="'/icons/'+ stack +'.png'" :alt="stack" :title="stack">
                        </div>
                    </div>

                    <div class="project-buttons flex flex-col gap-2">
                        <a :href="project.url" class="project-button" target="_blank" :class="{'disabled-btn': project.url === ''}">
                        <div class="url rounded-md p-2 text-center">
                            Live Website
                        </div>
                        </a>
                        <a :href="project.github" class="project-button" target="_blank" :class="{'disabled-btn': project.github === ''}">
                        <div class="github bg-emerald-300 rounded-md p-2 text-center">
                            Github
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<style scoped>

@media screen and (min-width: 868px) {
  .project-card {
    width: 500px !important;
  }
}
.project-container {
    padding-bottom: 2rem;
    min-height: 100vh;
    max-height: 100vh;
}
.project-card {
    width: 100%;
    height: fit-content;
    background-color: #FFF;
    border: 1px solid rgba(136, 136, 136, 0.411);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.project-image {
  width: 100%;
  height: 200px;
}
.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.project-detail {
    width: 100%;
}
.project-detail .project-title {
  font-size: 28px;
  font-weight: var(--font-light);
  color: var(--font-color);
}
.project-detail .project-desc {
  font-size: 16px;
  font-weight: var(--font-light);
  color: var(--font-color);
}
.project-action {
    width: 100%;
    margin: 1rem 0;
}

:is(.project-button) .url, .github {
  width: 100%;
  font-size: 16px;
  font-weight: var(--font-bold);
  transition: all 0.35s ease-in-out;
  color: #FFF;
}

.url {
  background-color: var(--darker-primary-color);
}

.url:hover {
  background-color: var(--primary-color);
}

.github {
  background-color: #24292e; 
}

.github:hover {
  background-color: #1b1f23;
}

.disabled-btn {
  pointer-events: none;
}

.disabled-btn .url {
  background-color: var(--primary-color);
}

.disabled-btn .github {
  background-color: #7c7c7c;
  color: rgb(202, 202, 202);
}
.stack-icon {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.stack-icon img {
  width: 20px;
  height: 20px;
}
</style>