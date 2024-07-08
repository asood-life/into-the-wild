<template>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <div id="app">
    <HomePage />
  </div>
</template>

<style>
body {
  overflow: hidden;
  background-image: url('./assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: { HomePage }
}
document.title = 'Wild Ones'
</script>