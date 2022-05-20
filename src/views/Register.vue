<template>
  <h1>Register（登録画面）</h1>
  <h2>Create an Account（アカウントをお持ちでない方）</h2>
  <p><input type="text" placeholder="Email" v-model="email"/></p>
  <p><input type="password" placeholder="Password" v-model="password"/></p>
  <p><button v-on:click="register">Submit（登録）</button></p>
</template>

<script setup>
  import { ref } from 'vue';
  import firebase from 'firebase/compat/app';
  import "firebase/compat/auth";
  import { useRouter } from 'vue-router';

  const email = ref('')
  const password = ref('')
  const router = useRouter()

  const register = ()=> {
    firebase.auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((date) => {
        console.log('Successfully Registered.')
        router.push('/feed')
      })
      .catch( err => {
        console.log(err.code)
        alert(err.message)
      });
  }
</script>