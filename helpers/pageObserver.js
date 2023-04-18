import { useRoute } from "vue-router";
import { useIntersectionObserver } from "@vueuse/core";

export const pageObserver = (target, element, params) => {
    const el = document.getElementById(element)
    const route = useRoute()
    useIntersectionObserver(
        target,
        ([{ isIntersecting }], observer) => {
            if (isIntersecting === true) {
                el.classList.add('active')

                history.pushState(
                    {},
                    null,
                    `${route.path}#${params}`
                )
            } else {
                el.classList.remove('active')
            }
        }
    )
}