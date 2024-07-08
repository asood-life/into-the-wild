<template>
    <div id="onload-animation"
        class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 transition-opacity duration-1000 bg-white">
        <img src="../assets/sign-board.png" class="animate-spin-slow w-1/3 h-auto">
    </div>
    <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/3 mb-4 md:mb-0">
            <SearchBox />
        </div>
        <div class="w-full md:w-2/3">
            <MapViewer />
        </div>
    </div>
</template>

<script>
import SearchBox from './SearchBox.vue';
import MapViewer from './MapViewer.vue';

export default {
    components: {
        SearchBox,
        MapViewer
    }
}

setTimeout(function () {
    const signBoard = document.getElementById('onload-animation');
    signBoard.style.opacity = '0';
    signBoard.style.zIndex = '-1';
}, 2500);
</script>
  
<style scoped>
@keyframes flip {
    0% {
        transform: perspective(400px) rotateY(0deg);
    }

    100% {
        transform: perspective(400px) rotateY(360deg);
    }
}

.animate-spin-slow {
    animation: flip 2s ease-in-out forwards;
}
</style>
