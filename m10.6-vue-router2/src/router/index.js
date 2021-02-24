import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Customers from '../views/Customers.vue'
import Suppliers from '../views/Suppliers.vue'
import Warehouse from '../views/Warehouse.vue'
import Store from '../views/Store.vue'
import CustomerDetails from '../views/CustomerDetails.vue'
import Food from '../views/Food.vue'
import FrozenFood from '../views/FrozenFood.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/suppliers',
    name: 'Suppliers',
    component: Suppliers
  },
  {
    path: '/warehouse',
    name: 'Warehouse',
    component: Warehouse
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    path: '/customers/:name',
    name: 'CustomerDetails',
    component: CustomerDetails
  },
  {
    path: '/store/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/store/frozen-food',
    name: 'FrozenFood',
    component: FrozenFood
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
