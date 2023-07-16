<script setup>
import { pageObserver } from '~~/helpers/pageObserver';

const servicesTarget = ref(null)

const services = [
    {
        icon: 'design.svg',
        title: 'Design Slicing',
        desc: 'Turn your design into a website with good slicing.',
    },
    {
        icon: 'develop.svg',
        title: 'Web Development',
        desc: 'Develop websites using technologies like React/Vue/Laravel',
    },
    {
        icon: 'profile.svg',
        title: 'Company Profile',
        desc: 'Create a company profile website to promote your business.',
    },
]

onMounted(() => {
    pageObserver(servicesTarget, 'services-id', 'services');
})
</script>

<template>
    <div class="service-container h-fit py-20 relative" id="services">
        <SectionTitle section-title="Services"/>

        <p class="service-about mb-10">
            I am <span class="hashtag">#OpenForBusiness</span> and providing services for your business. I can help you to create a website for your business, 
            company profile, landing page or personal website.
        </p>

        <div class="services w-full flex justify-between items-center gap-10">
            <div class="services-box bg-white p-5 rounded-md" v-for="(service, i) in services" :key="i">
                <div class="services-box-content flex flex-col items-center text-center">
                    <div class="services-box-content-icon">
                        <img :src="'/icons/'+service.icon" :alt="service.title">
                    </div>
                    <div class="services-box-content-title my-2">
                        <h1 class="font-bold text-lg">{{ service.title }}</h1>
                    </div>
                    <div class="services-box-content-desc">
                        <p>
                            {{ service.desc  }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="target absolute" ref="servicesTarget"></div>
    </div>
</template>

<style>
.service-container {
    padding: 6rem 2.5rem;
}
.services {
    position: relative;
    z-index: 1;
}

.services::before, .services::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%) skew(20deg);
    width: 43%;
    height: 50%;
    background-color: var(--primary-color);
    z-index: -1;
}

.services::before {
    left: -10%;
}

.services::after {
    right: -10%;
}

.service-about {
    font-size: var(--tfs-small);
}

.services-box {
    width: 28%;
    border: 1px solid rgba(136, 136, 136, 0.507);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.hashtag {
    color: var(--darker-primary-color);
    font-weight: bold;
}

@media screen and (max-width: 868px) {
    .services {
        flex-direction: column;
        align-items: center;
    }

    .services::before, .services::after {
        display: none;
    }

    .services-box {
        width: 100%;
        position: relative;
    }

    .services-box::before, .services-box::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%) skew(20deg);
        width: 43%;
        height: 50%;
        background-color: var(--primary-color);
        z-index: -1;
    }

    .services-box::before {
        left: -20%;
    }

    .services-box::after {
        right: -20%;
    }
}
</style>