import { createRouter, createWebHashHistory } from 'vue-router'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    {
        path: '/',
        //component: ListPage
        component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')
    },
    {
        path: '/about',
        //esto es para indicarle al web el nombre del componente
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
    },
    {
        path: '/:id',
        //component: PokemonPage
        component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
        props: (route) => {
            const id = Number(route.params.id)
            return {
                id: isNaN(id) ? 1 : Number(id)
            }
        }
    },
    {
        path: '/:pathMatch(.*)*',
        //component: NoPageFound
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound')

    },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})


export default router