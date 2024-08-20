import VideoDetail from '@/pages/VideoDetail.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Register from '@/pages/Register.vue'
import Login from '@/pages/Login.vue'
import store from '@/store/index'
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      name: "Dashboard",
      path: '/dashboard',
      component: Dashboard,
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      }
    },
    {
      name: "Register",
      path: '/register',
      component: Register,
      meta: {
        title: 'Criar conta'
      }
    },
    {
      name: "Login",
      path: '/login',
      component: Login,
      meta: {
        title: 'Realizar Login'
      }
    },
    {
      name: "Video",
      path: '/video/:id',
      component: VideoDetail,
      meta: {
        title: 'Video',
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router