
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'typography-page', name: 'typography-page', component: () => import('pages/TypographyPage.vue') },
      { path: 'flex-page', name: 'flex-page', component: () => import('pages/FlexPage.vue') },
      { path: 'dialogs-page', name: 'dialogs-page', component: () => import('pages/Dialogs.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
