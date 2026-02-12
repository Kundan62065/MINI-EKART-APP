
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Verify from './pages/Verify'
import VerifyEmail from './pages/VerifyEmail'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import AdminSales from './pages/Admin/AdminSales'
import AddProduct from './pages/Admin/AddProduct'
import AdminProduct from './pages/Admin/AdminProduct'
import AdminOrders from './pages/Admin/AdminOrders'
import ShowUserOrders from './pages/Admin/ShowUserOrders'
import AdminUsers from './pages/Admin/AdminUsers'
import UserInfo from './pages/Admin/UserInfo'
import ProtectedRoute from './components/ProtectedRoute'
import SingleProduct from './pages/SingleProduct'
import AddressForm from './pages/AddressForm'
import OrderSuccess from './pages/OrderSuccess'


 const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar /><Home /><Footer/></>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/verify',
    element: <Verify />
  },
  {
    path: '/verify/:token',
    element: <VerifyEmail/>
  },
  {
    path: '/profile/:userId',
    element:<ProtectedRoute> < Navbar/><Profile /></ProtectedRoute>
  },
  {
    path: '/products/',
    element:<> < Navbar/><Products/></>
  },
  {
    path: '/products/:id',
    element:<> < Navbar/><SingleProduct/></>
  },
  {
    path: '/cart/',
    element:<ProtectedRoute> < Navbar/><Cart/></ProtectedRoute>
  },
  {
    path: '/address',
    element:<ProtectedRoute> <AddressForm/></ProtectedRoute>
  },
  {
    path: '/order-success',
    element:<ProtectedRoute> <OrderSuccess/></ProtectedRoute>
  },
  {
    path: '/dashboard',
    element:<ProtectedRoute adminOnly={true}><Navbar/><Dashboard/></ProtectedRoute>,
    children:[
     {
       path: "sales",
       element: <><AdminSales/></>
     },
     {
       path: "add-product",
       element: <><AddProduct /></>
     },
     {
       path: "products",
       element: <><AdminProduct /></>
     },
     {
       path: "orders",
       element: <><AdminOrders /></>
     },
     {
       path: "users/orders/:userId",
       element: <><ShowUserOrders/></>
     },
     {
       path: "users",
       element: <><AdminUsers /></>
     },
     {
       path: "users/:id",
       element: <><UserInfo /></>
     },
    ]
  }
 ])
const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App


