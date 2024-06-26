import OGallery from '@/components/organisms/OGallery.vue'
import OContact from '@/components/organisms/OContact.vue'
import OImpressum from '@/components/organisms/OImpressum.vue'
import OAboutus from '@/components/organisms/OAboutus.vue'
import OMorph from '@/components/organisms/OMorph.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/projects', name: 'projects', component: OGallery },
    { path: '/contact', name: 'contact', component: OContact  },
    { path: '/impressum', name: 'impressum', component: OImpressum  },
    { path: '/aboutus', name: 'aboutus', component: OAboutus  },
    { path: '/morph', name: 'morph', component: OMorph  }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
