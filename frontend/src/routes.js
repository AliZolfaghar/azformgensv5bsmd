// @ts-nocheck
import {wrap} from 'svelte-spa-router/wrap'

const routes = {    

    '/': wrap({
        asyncComponent: () => import('./pages/Home.svelte')
    }),

    '/home': wrap({
        asyncComponent: () => import('./pages/Home.svelte')
    }),

    '/login': wrap({
        asyncComponent: () => import('./pages/Login.svelte')
    }),

    '/logout': wrap({
        asyncComponent: () => import('./pages/logout.svelte')
    }),



    '/about': wrap({
        asyncComponent: () => import('./pages/About.svelte')
    }),

    '/posts/:post_id?': wrap({
        asyncComponent: () => import('./pages/Posts.svelte')
    }),



    '/user/setting/:subpage?': wrap({
        asyncComponent: () => import('./pages/UserSetting.svelte')
    }),



    // catch all other routes as notfound page 
    '*': wrap({
        asyncComponent: () => import('./pages/NotFound.svelte')
    }),

}

export default routes;
