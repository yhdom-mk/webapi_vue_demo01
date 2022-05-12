const { createApp } = Vue
const { createRouter, createWebHistory } = VueRouter

const routes = [
  { path:'/home', component:home },
  { path:'/album', component:album },
  { path:'/tune', component:tune }
]

// const router = new VueRouter({
//   routes
// })

// const app = new Vue({
//   el: '#app',
//   router
// })
// .$mount('#app')

const router = createRouter({
  history: createWebHistory(),
  routes
  // routes: [
  //   { path:'/home', component:home },
  //   { path:'/album', component:album },
  //   { path:'/tune', component:tune }
  // ]
})


const app = createApp({

})
app.use(router)

window.vm = app.mount('#app')