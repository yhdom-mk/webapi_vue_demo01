<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <span v-if="isLoggedIn">
        <router-link to="/album">Album</router-link> |
        <router-link to="/tune">Tune</router-link> |
        <button @click="signOut">Logout</button>
      </span>
      <span v-else>
        <router-link to="/register">Register</router-link> |
        <router-link to="/sign-in">Login</router-link> |
      </span>
    </nav>
    <router-view />
  </div>
  <!-- <Album />
  <Tune /> -->
</template>

<script setup>
  import { ref, watchEffect } from 'vue';
  import firebase from 'firebase/compat/app';
  import "firebase/compat/auth";
  import { useRouter } from 'vue-router';

  const router = useRouter()
  const isLoggedIn = ref(true)

  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      isLoggedIn.value =true
    }else {
      isLoggedIn.value =false
    }
  });

  const signOut = ()=> {
    firebase.auth().signOut()
    router.push('/')
  }
// import Album from './components/Album.vue'
// import Tune from './components/Tune.vue'
// export default {
//   name: 'App',
//   components: {
//     Album,
//     Tune
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
