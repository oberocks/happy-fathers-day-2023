<!-- ./src/components/TheFooter.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import pkg from '../../package.json'
    import VvAnchor from './vv/anchors/VvAnchor.vue'
    import VvEl from './vv/elements/VvEl.vue'
    import VvFa from './vv/elements/VvFa.vue'

    export default defineComponent({

        components: {
            VvAnchor,
            VvEl,
            VvFa,
        },

        setup () {

            const year = new Date().getFullYear()

            return {
                pkg,
                year,
            }

        },

    })

</script>

<template>

    <footer class="w-full pb-6 pt-12">
    
        <div class="text-center">
            <div class="opacity-75 text-sm">
                Made/written with 
                <VvEl tag="span" text-color="error">
                    <VvFa family="fas" icon="heart"/> 
                </VvEl>
                by 
                <VvAnchor
                    :external="true"
                    href="https://github.com/oberocks"
                    color="default"
                >
                    @oberocks
                </VvAnchor>
            </div>
            <div class="text-center py-1">
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
                    <img src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg" alt="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License" class="mx-auto">
                </a>
            </div>
            <div class="opacity-50 text-xs">
                Published {{ year }} | v{{ pkg.version }}
            </div>
        </div>
    
    </footer>

</template>
