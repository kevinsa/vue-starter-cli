import Home from '../components/Home'
import About from '../components/About'
import Login from '../components/Login'

export default [
  {
    // non-protected route to handle application authentication
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    // protected route to application home component
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    // protected route to application about component
    path: '/about',
    name: 'About',
    component: About,
    meta: { requiresAuth: true }
  }
]
