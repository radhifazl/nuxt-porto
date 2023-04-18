<template>
  <swiper
    :grabCursor="true"
    :effect="'creative'"
    :navigation="isDesktop"
    :pagination="{
      dynamicBullets: true,
    }"
    :loop="true"
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    :modules="modules"
    class="mySwiper3"
  >
    <swiper-slide v-for="(project, i) in projects" :key="i">
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

          <nuxt-link :to="'/projects/'+project.slug">
            <div class="project-detail-btn rounded-md p-2 text-center">
              Project Detail
            </div>
          </nuxt-link>

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
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import 'swiper/css/effect-creative';

  // import required modules
  import { EffectCreative, Pagination, Navigation } from 'swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const isDesktop = ref(false);

      const handleResize = () => {
        if (window.innerWidth > 768) {
          isDesktop.value = true;
        } else {
          isDesktop.value = false;
        }
      }

      const projects = [
        {
          img: 'whisper.png',
          title: 'Whispers',
          desc: 'Inspired by secreto, whispers is an app where you can send anonymous messages.',
          stacks: ['bootstrap', 'javascript', 'vue', 'firebase'],
          url: 'https://whisperss.netlify.app/',
          github: 'https://github.com/radhifazl/whispers',
          slug: 'whispers',
        },
        {
          img: 'yanlanding.png',
          title: 'Yan Landing Page',
          desc: 'Yan landing page is a landing page for YAN Invitation company, this company provides services for making web-based online invitations.',
          stacks: ['bootstrap', 'javascript', 'vue', 'firebase'],
          url: 'https://yaninvitation.web.app/',
          github: '',
          slug: 'yan-landing-page',
        },
        {
          img: 'silau.png',
          title: 'Silau',
          desc: 'Silau (Sistem Laundry) is a laundry management system that helps you manage your laundry business.',
          stacks: ['tailwind', 'javascript', 'vue', 'laravel', 'sql'],
          url: 'https://silau.netlify.app',
          github: '',
          slug: 'silau',
        },
        {
          img: 'yanadmin.png',
          title: 'YAN Admin',
          desc: 'YAN Admin is a web-based admin panel for YAN Invitation landing page, this admin panel is used to manage contents of the YAN landing page.',
          stacks: ['bootstrap', 'javascript', 'vue', 'firebase'],
          url: 'https://yanninvitation.web.app/',
          github: '',
          slug: 'yan-admin',
        },
        {
          img: 'pokonehotel.png',
          title: 'Pokone Hotel',
          desc: 'Pokone Hotel is a hotel reservation system that serves as a reservation system for hotel rooms.',
          stacks: ['tailwind', 'typescript', 'next', 'laravel', 'sql'],
          url: '',
          github: '',
          slug: 'pokone-hotel',
        },
        {
          img: 'ksnproject.png',
          title: 'KSN Dev Team',
          desc: 'KSN Dev Team is a project management system that helps the owner of the company to give and track projects for interns in the company.',
          stacks: ['bootstrap', 'javascript', 'vue', 'firebase'],
          url: 'https://vuebase-ksn.web.app/',
          github: '',
          slug: 'ksn-dev-team',
        },
      ]

      onMounted(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        
        localStorage.setItem('projects', JSON.stringify(projects));
      });

      return {
        modules: [EffectCreative, Pagination, Navigation],
        projects, isDesktop
      };
    },
  };
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
    background: #FFF;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.project-image {
  width: 50%;
  height: 100%;
  position: relative;
}

.project-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.158);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  
.swiper-slide {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 22px;
  font-weight: bold;
  color: var(--font-color);
  background: #FFF;
}
.project-detail .project-title {
  font-size: 28px;
  height: 15%;
  font-weight: var(--font-light);
  color: var(--font-color);
}
.project-detail .project-desc {
  font-size: 16px;
  font-weight: var(--font-light);
  color: var(--font-color);
}
.project-action {
  position: absolute;
  bottom: 5%;
}

:is(.project-button) .url, .github {
  width: 85%;
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

@media screen and (min-width: 868px) {
  .project-detail-btn {
    display: none;
  }
}

@media screen and (max-width: 868px){
  .swiper-slide {
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
  }

  .project-image {
    height: 50%;
  }
  
  .project-desc {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 
  }

  .project-image img {
    height: 100%;
  }

  .project-detail, .project-image, .project-image img {
    width: 100%;
  }

  .project-detail {
    padding: 0;
  }

  .project-detail .project-title {
    height: 30%;
  }

  .project-title, .project-desc {
    padding: 0 1.5rem;
    margin-bottom: 1rem;
  }

  .project-title {
    padding-top: 1rem;
    font-weight: 600 !important;
    font-size: var(--tfs-medium) !important;
  }

  .project-action {
    padding: 0 1.5rem;
    bottom: 0;
  }

  .project-detail-btn {
    width: 100%;
    background-color: var(--darker-primary-color);
    color: #FFF;
    font-weight: var(--font-light);
    font-size: 16px;
  }

  .stacks, .project-buttons  {
    display: none;
  }
}
</style>
  