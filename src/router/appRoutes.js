
import Cart from '@/components/Cart/index.js'
import User from '@/components/User/index.js'
import City from '@/components/City/index.js'
const appRoutes = [
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/city',
        component: City
    }
]

export default appRoutes