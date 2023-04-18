<script setup>
import { pageObserver } from '~~/helpers/pageObserver';

const contactsTarget = ref(null)

onMounted(() => {
    pageObserver(contactsTarget, 'contacts-id', 'contacts');
})
</script>

<template>
    <div class="container relative" id="contacts">
        <SectionTitle section-title="Contacts"/>

        <h1 class="contact-title title-desk -mt-8">
            <span>Reach</span> me on : 
        </h1>

        <div class="contacts w-full flex items-center justify-between gap-20">
            <div class="left-col w-1/2">
                <h1 class="contact-title title-mob my-5">
                    <span>Reach</span> me on : 
                </h1>
                <ContactList/>
            </div>
            <div class="right-col">
                <h1 class="contact-subtitle font-bold">
                    Have a <span>project?</span> I would love to help you.
                </h1>
                <a class="flex items-center gap-2" href="mailto:radhif4zli@gmail.com">
                    <img src="/icons/gmail.svg" alt="Gmail" class="gmail">
                    <h1 class="font-semibold text-lg my-5">radhif4zli@gmail.com</h1>
                </a>
            </div>
        </div>

        <div class="target absolute" ref="contactsTarget"></div>
    </div>
</template>

<style>
.contact-title {
    font-size: var(--tfs-semilarge);
    font-weight: var(--font-semibold);
}

.contact-title span {
    color: var(--darker-primary-color);
}

.contact-subtitle {
    font-size: 40px;
}

.contact-subtitle span {
    color: var(--darker-primary-color);
}

.gmail {
    width: 30px;
}

.title-mob {
    display: none;
}

@media screen and (max-width: 868px) {
    .contact-title {
        font-size: var(--tfs-regular);
    }

    .title-desk {
        display: none;
    }

    .title-mob {
        display: block;
    }

    .contact-subtitle {
        font-size: var(--tfs-small);
    }

    .contacts {
        flex-direction: column-reverse;
        justify-content: center;
        gap: 0;
    }

    .left-col {
        width: 100%;
    }
}
</style>