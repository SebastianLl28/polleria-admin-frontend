import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.layout'
import { APP_ROUTER } from './routers'

const LoginPage = lazy(() => import('./pages/login/Login.page'))
const DashboardPage = lazy(() => import('./pages/dashboard/Dashboard.page'))
const UsersPage = lazy(() => import('./pages/user/User.page'))
const CategoriesPage = lazy(() => import('./pages/categories/Categories.page'))
const ProductsPage = lazy(() => import('./pages/product/Product.page'))
const PurchasesPage = lazy(() => import('./pages/purchase/Purchase.page'))
const CustomerPage = lazy(() => import('./pages/customer/Customer.page'))
const EmployeePage = lazy(() => import('./pages/employee/Employee.page'))
const LocalPage = lazy(() => import('./pages/local/Local.page'))
const ConfigPage = lazy(() => import('./pages/config/Config.page'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={APP_ROUTER.LOGIN} element={<LoginPage />} />
          <Route element={<MainLayout />}>
            <Route path={APP_ROUTER.DASHBOARD} element={<DashboardPage />} />
            <Route path={APP_ROUTER.USERS} element={<UsersPage />} />
            <Route path={APP_ROUTER.CATEGORIES} element={<CategoriesPage />} />
            <Route path={APP_ROUTER.PRODUCTS} element={<ProductsPage />} />
            <Route path={APP_ROUTER.PURCHASES} element={<PurchasesPage />} />
            <Route path={APP_ROUTER.CUSTOMER} element={<CustomerPage />} />
            <Route path={APP_ROUTER.EMPLOYEE} element={<EmployeePage />} />
            <Route path={APP_ROUTER.STORES} element={<LocalPage />} />
            <Route path={APP_ROUTER.SETTINGS} element={<ConfigPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
