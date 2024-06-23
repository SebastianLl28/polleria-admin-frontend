import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { APP_ROUTER } from './routers'
import MainLayout from './layouts/MainLayout.layout'
import Loader from './shared/loader/Loader'

const LoginPage = lazy(() => import('./pages/login/Login.page'))
const DashboardPage = lazy(() => import('./pages/dashboard/Dashboard.page'))
const CategoriesPage = lazy(() => import('./pages/categories/Categories.page'))
const ProductsPage = lazy(() => import('./pages/product/Product.page'))
const SalesPage = lazy(() => import('./pages/sales/Sales.page'))
const CustomerPage = lazy(() => import('./pages/customer/Customer.page'))
const EmployeePage = lazy(() => import('./pages/employee/Employee.page'))
const StorePage = lazy(() => import('./pages/store/Store.page'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={APP_ROUTER.LOGIN} element={<LoginPage />} />
          <Route element={<MainLayout />}>
            <Route path={APP_ROUTER.DASHBOARD} element={<DashboardPage />} />
            <Route path={APP_ROUTER.CATEGORIES} element={<CategoriesPage />} />
            <Route path={APP_ROUTER.PRODUCTS} element={<ProductsPage />} />
            <Route path={APP_ROUTER.SALES} element={<SalesPage />} />
            <Route path={APP_ROUTER.CUSTOMER} element={<CustomerPage />} />
            <Route path={APP_ROUTER.EMPLOYEE} element={<EmployeePage />} />
            <Route path={APP_ROUTER.STORES} element={<StorePage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster position='bottom-right' expand richColors />
    </BrowserRouter>
  )
}

export default App
