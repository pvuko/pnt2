
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },


      {
        path: '/AltaJugador/',
        name: 'AltaJugador',
        component: () => import('pages/AltaJugador.vue'),
      },

      {
        path: '/Plantel/',
        name: 'Plantel',
        component: () => import('pages/Plantel.vue'),
      },


    ]
  },

  
  
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
