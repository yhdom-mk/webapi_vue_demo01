<template>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <button type="button" class="btn btn-outline-success">
          <router-link to="/">Home</router-link>
        </button>
        <span v-if="isLoggedIn">
          <button type="button" class="btn btn-outline-success">
            <router-link to="/album">Album</router-link>
          </button>
          <button type="button" class="btn btn-outline-success">
            <router-link to="/tune">Tune</router-link>
          </button>
          <button type="button" class="btn btn-secondary" @click="signOut">Logout</button>
        </span>
        <span v-else>
          <button type="button" class="btn btn-outline-success">
            <router-link to="/register">Register</router-link>
          </button>
          <button type="button" class="btn btn-outline-success">
            <router-link to="/sign-in">Login</router-link>
          </button>
        </span>
      </div>
    </nav>
    <router-view />
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
