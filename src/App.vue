<!-- ./src/App.vue -->

<script setup lang="ts">
    
    import BackgroundSvg from './components/BackgroundSvg.vue'
    import VvColorModeButton from './components/vv/buttons/VvColorModeButton.vue'
    import VvScrollUp from './components/vv/buttons/VvScrollUp.vue'

    import type { ValidColorModes } from '@obewds/vueventus'

    const colorMode = localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') as ValidColorModes : 'light' as ValidColorModes

    const tw = {
        bgSvg: 'opacity-25 w-full sm:w-1/2 lg:w-1/4'
    }

</script>

<template>

    <div class="overflow-hidden bg-lightBlue-200 dark:bg-lightBlue-500">

        <div class="fixed top-0 left-0 flex flex-wrap bg-lightBlue-200 text-lightBlue-900 dark:bg-lightBlue-500 dark:text-white overflow-hidden">
            <BackgroundSvg :class="tw.bgSvg"/>
            <BackgroundSvg :class="tw.bgSvg"/>
            <BackgroundSvg :class="tw.bgSvg"/>
            <BackgroundSvg :class="tw.bgSvg"/>
            <BackgroundSvg :class="tw.bgSvg"/>
            <BackgroundSvg :class="tw.bgSvg"/>
            <BackgroundSvg :class="tw.bgSvg"/>
            <BackgroundSvg :class="tw.bgSvg"/>
            <BackgroundSvg :class="tw.bgSvg"/>
            <BackgroundSvg :class="tw.bgSvg"/>
            <BackgroundSvg :class="tw.bgSvg"/>
            <BackgroundSvg :class="tw.bgSvg"/>
            <BackgroundSvg :class="tw.bgSvg"/>
            <BackgroundSvg :class="tw.bgSvg"/>
            <BackgroundSvg :class="tw.bgSvg"/>
            <BackgroundSvg :class="tw.bgSvg"/>
        </div>

        <main class="min-h-screen w-full text-center px-6 pt-20">

            <router-view v-slot="{ Component, route }">
                <transition name="page" mode="out-in">
                    <component :is="Component" :key="route.path"/>
                </transition>
            </router-view>

        </main>

        <aside class="fixed bottom-0 right-0 text-right z-40">
            <nav class="relative bottom-0 pb-3 pr-4">
                <div class="flex flex-col justify-end space-y-3">
                    <VvScrollUp color="default"/>
                    <VvColorModeButton palette="solid" color="default" :mode="(colorMode)"/>
                </div>
            </nav>
        </aside>

    </div>

</template>


<style>

    .page-enter-active {
        transition: opacity 0.3s ease-out;
    }

    .page-leave-active {
        transition: opacity 0.3s ease-in;
    }

    .page-enter-from {
        transform: translateY(10px);
        opacity: 0;
    }

    .page-leave-to {
        opacity: 0;
    }

</style>

