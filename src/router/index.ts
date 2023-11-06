import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import GameOnlineView from '@/views/GameOnlineView.vue'
import GameStoryView from '@/views/GameStoryView.vue'
import MainMenuView from '@/views/MainMenuView.vue'
import { JwtTokenManager } from '@/utils/jwtManager.utils'

const tokenManager = new JwtTokenManager()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/main',
      name: 'Main',
      component: MainMenuView,
      meta: { requiresAuth: true }
    },
    {
      path: '/online-mode',
      name: 'OnlineGame',
      component: GameOnlineView,
      meta: { requiresAuth: true }
    },
    {
      path: '/story-mode',
      name: 'StoryGame',
      component: GameStoryView,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const token = tokenManager.getToken()

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (token && typeof token === 'string') {
      if (tokenManager.isTokenValid(token)) {
        next()
      } else {
        try {
          // Appelez la fonction refreshToken de votre gestionnaire de token
          await tokenManager.refreshToken()
          // Une fois le token régénéré avec succès, vous pouvez autoriser l'accès
          next()
        } catch (error) {
          tokenManager.removeToken()
          next('/login') // Redirigez vers la page de connexion
        }
      }
    } else {
      tokenManager.removeToken()
      next('/login')
    }
  } else {
    // Gérer d'autres cas de navigation (sans authentification)
    next()
  }
})

export default router
