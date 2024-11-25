import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PreOrderForm from '../views/PreOrderForm.vue'
import Login from '../views/Login.vue'
import UserView from '../views/admin/users/List.vue'
import CreateUserView from '../views/admin/users/Create.vue'
import UpdateUserView from '../views/admin/users/Update.vue'
import CategoryView from '../views/admin/categories/List.vue'
import CreateCategoryView from '../views/admin/categories/Create.vue'
import UpdateCategoryView from '../views/admin/categories/Update.vue'
import ProductView from '../views/admin/products/List.vue'
import CreateProductView from '../views/admin/products/Create.vue'
import UpdateProductView from '../views/admin/products/Update.vue'
import OrderView from '../views/admin/orders/List.vue'
import ViewOrderView from '../views/admin/orders/View.vue'
import UpdateOrderView from '../views/admin/orders/Update.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/form',
      name: 'form',
      component: PreOrderForm,
    },
    {
      path: '/users',
      children: [
        {
          path: '/users',
          name: 'users',
          component: UserView,
        },
        {
          path: 'create',
          name: 'createUser',
          component: CreateUserView,
        },
        {
          path: 'update/:id',
          name: 'updateUser',
          component: UpdateUserView,
        }
      ]
    },
    {
      path: '/categories',
      children: [
        {
          path: '/categories',
          name: 'categories',
          component: CategoryView,
        },
        {
          path: 'create',
          name: 'createCategory',
          component: CreateCategoryView,
        },
        {
          path: 'update/:id',
          name: 'updateCategory',
          component: UpdateCategoryView,
        }
      ]
    },
    {
      path: '/products',
      children: [
        {
          path: '/products',
          name: 'products',
          component: ProductView,
        },
        {
          path: 'create',
          name: 'createProduct',
          component: CreateProductView,
        },
        {
          path: 'update/:id',
          name: 'updateProduct',
          component: UpdateProductView,
        }
      ]
    },
    {
      path: '/orders',
      children: [
        {
          path: '/orders',
          name: 'orders',
          component: OrderView,
        },
        {
          path: 'view/:id',
          name: 'viewOrder',
          component: ViewOrderView,
        },
        {
          path: 'update/:id',
          name: 'updateOrder',
          component: UpdateOrderView,
        }
      ]
    },

  ],
})

export default router
