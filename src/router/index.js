import VueRouter from 'vue-router'

import Init from '../components/init'
// import Dashboard from '../components/dashboard'
// import NotFoundComponent from '../components/not-found-component'
// const Init = (resolve) => { require(['../components/init.vue'], resolve) }
const Dashboard = (resolve) => { require(['../components/dashboard'], resolve) }
const NotFound = (resolve) => { require(['../components/not-found'], resolve) }

const ItWorks = {
    template: '<div>It works!</div>'
}

const routes = [
    { path: '/', name: 'root', component: ItWorks },
    {
        path: '/init',
        component: Init
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    // {
    //     path: '*',
    //     component: NotFound
    // }
]

const router = new VueRouter({
    base: '/build/',
    mode: 'hash',
    routes
})

router.beforeEach((to, from, next) => {
    console.log(to.path, from.path)
    // window.location.href = 'http://localhost:8080/init'
    // if (to.path === '/') {
    //     next('/init')
    // }
    // if (to.path === 'init') {
    //     next('/dashboard')
    // }
})

export default router