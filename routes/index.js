const router = require('express').Router()
const homeRouter = require('./home.route')

const routers = [
    {
        path: '/home',
        handler: homeRouter
    }
]

routers.forEach(({ path, middlewares, handler }) => {
    Array.isArray(middlewares) && middlewares.length > 0
        ? router.use(path, middlewares, handler)
        : router.use(path, handler)
})

module.exports = router
