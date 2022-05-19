import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/compat/app';
import './index.css'
// import { initializeApp } from "firebase/app";

///Firebase configuration///
// /const firebaseConfig = process.env.VUE_APP_FIREBASE_CONFIG
const firebaseConfig = {
  
};

///Initialize Firebase///
firebase.initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.mount('#app');

// const app = initializeApp(firebaseConfig);
// createApp(App).mount('#app')





