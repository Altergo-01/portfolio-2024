import { createRouter, createWebHistory } from 'vue-router'
// import HeyCompVue from '@/views/HeyComp.vue'
// import MeCompVue from '@/views/MeComp.vue'
// import UsCompVue from '@/views/UsComp.vue'
// import WorkCompVue from '@/views/WorkComp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
      // { path: '/Hey', component: HeyCompVue,  },
      // { path: '/Me', component: MeCompVue },
      // { path: '/Us', component: UsCompVue },
      // { path: '/Work', component: WorkCompVue },

 
  ]
})

export default router
