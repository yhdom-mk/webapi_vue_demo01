<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <!-- <Album /> -->
  <Tune />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Album from './components/Album.vue'
import Tune from './components/Tune.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // Album,
    Tune
  }
}
</script>
