<!-- ./src/pages/Home.vue -->


<script setup lang="ts">

    import TheFooter from '../components/TheFooter.vue'

</script>


<template>

    <div class="relative w-full h-full top-0 left-0 overflow-hidden px-4">

        <div class="max-w-xl bg-lightBlue-100 dark:bg-lightBlue-700 bg-opacity-90 dark:bg-opacity-85 text-lightBlue-800 dark:text-lightBlue-100 rounded-xl shadow-lg mx-auto mb-24 px-6">

            <div class="max-w-2xl mx-auto text-center text-3xl pt-12">
                Happy Father's Day!
            </div>

            <ul class="text-lg py-6">

                <li>Do father's make</li>
                <li>The world go around?</li>
                <li>When one sees you fall,</li>
                <li class="pb-3">And saves you from the ground?</li>

                <li>Or maybe when one</li>
                <li>Sees you late or behind,</li>
                <li>And bends time and space</li>
                <li class="pb-3">To get you there in time?</li>

                <li>And what about fort battles,</li>
                <li>Or game time or poop?</li>
                <li>It's father's that always</li>
                <li class="pb-3">Know what's funny, too!</li>

                <li>From corny jokes</li>
                <li>To times of despair,</li>
                <li>Dad's keep on going,</li>
                <li class="pb-3">With or without hair.</li>

                <li>So once every year,</li>
                <li>We all take a day,</li>
                <li>To tell our dad's thank you</li>
                <li class="pb-3">In meaningful ways.</li>

                <li>Because dad's are needed.</li>
                <li>And crucial. And there.</li>
                <li>They deserve our respect,</li>
                <li class="pb-3">And our love and our care.</li>

                <li>So thank you dear papas,</li>
                <li>For all that you do,</li>
                <li>You keep us in check,</li>
                <li class="pb-3">And you teach us stuff, too!</li>

                <li>So no matter what happens,</li>
                <li>Remember this truth:</li>
                <li>There is no hero like</li>
                <li>The dad that made you.</li>

            </ul>

            <TheFooter/>

        </div>

    </div>

</template>

<style>

.heart {
    position: absolute;
    top: -50%;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -m-transform: rotate(-45deg);
    transform: rotate(-45deg)
 }

.heart:before {
    position: absolute;
    top: -50%;
    left: 0;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 100%;
}

.heart:after {
    position: absolute;
    top: 0;
    right: -50%;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 100%;
}

@-webkit-keyframes love {
  0%{top:110%}
}
@-moz-keyframes love {
  0%{top:110%}
}
@-ms-keyframes love {
  0%{top:110%}
}
@keyframes love {
  0%{top:110%}
}

</style>
