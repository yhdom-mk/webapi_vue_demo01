<template>
  <h1>SignIn（ログイン画面）</h1>
  <h2>Login your Account（アカウントをお持ちの方）</h2>
  <p><input type="text" placeholder="Email" v-model="email"/></p>
  <p><input type="password" placeholder="Password" v-model="password"/></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button v-on:click="signin">Submit（送信）</button></p>
</template>

<script setup>
  import { ref } from 'vue';
  import firebase from 'firebase/compat/app';
  import "firebase/compat/auth"
  import { useRouter } from 'vue-router';

  const email = ref('')
  const password = ref('')
  const errMsg = ref()
  const router = useRouter()

  const signin = ()=> {
    firebase.auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((date) => {
        console.log('Successfully,Logged in.')
        router.push('/album')
        router.push('/tune')
      })
      .catch( err => {
        switch(err.code) {
          case 'auth/invalid-email': errMsg.value ="「email」が間違っています"
            break
          case 'auth/user-not-found': errMsg.value ="この「email」のユーザが見つかりません"
            break
          case 'auth/wrong-password': errMsg.value ="「password」が間違っています"
            break
          default: errMsg.value ="「email」または「password」が間違っています"
            break
        }
      });
  }
</script>