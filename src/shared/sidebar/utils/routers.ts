import { APP_ROUTER } from '@/routers'
import {
  BarChartBig,
  BriefcaseBusiness,
  Drumstick,
  LayoutDashboard,
  ShoppingBag,
  Store,
  UserSearch
} from 'lucide-react'

export const routers = [
  {
    name: 'Dashboard',
    path: APP_ROUTER.DASHBOARD,
    Icon: BarChartBig
  },
  {
    name: 'Cliente',
    path: APP_ROUTER.CUSTOMER,
    Icon: UserSearch
  },
  {
    name: 'Empleado',
    path: APP_ROUTER.EMPLOYEE,
    Icon: BriefcaseBusiness
  },
  {
    name: 'Categorias',
    path: APP_ROUTER.CATEGORIES,
    Icon: LayoutDashboard
  },
  {
    name: 'Productos',
    path: APP_ROUTER.PRODUCTS,
    Icon: Drumstick
  },
  {
    name: 'Ventas',
    path: APP_ROUTER.SALES,
    Icon: ShoppingBag
  },
  {
    name: 'Tiendas',
    path: APP_ROUTER.STORES,
    Icon: Store
  }
]
