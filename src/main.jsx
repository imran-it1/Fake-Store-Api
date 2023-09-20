import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout/MainLayout.jsx';
import HomePage from './pages/HomePage/HomePage';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Edit Profile/EditProfile';
import OrderTrack from './components/Order Track/OrderTrack';
import OrderHistory from './components/Order History/OrderHistory';
import Account from './pages/Account/Account';

const routers = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,

		children: [
			{
				path: '/',
				element: <HomePage></HomePage>,
			},
			{
				path: '/products',
				element: <Products></Products>,
				loader: () => fetch('https://fakestoreapi.com/products'),
			},

			{
				path: '/products/:Id',
				element: <ProductDetails></ProductDetails>,
				loader: ({ params }) =>
					fetch(`https://fakestoreapi.com/products/${params.Id}`),
			},

			{
				path: '/contact',
				element: <Contact></Contact>,
			},

			{
				path: '/dashboard',
				element: <Dashboard></Dashboard>,

				children: [
					{
						path: '/dashboard',
						element: <Profile></Profile>,
					},

					{
						path: '/dashboard/profile',
						element: <Profile></Profile>,
					},
					{
						path: '/dashboard/edit-profile',
						element: <EditProfile></EditProfile>,
					},
					{
						path: '/dashboard/order-track',
						element: <OrderTrack></OrderTrack>,
					},
					{
						path: '/dashboard/order-history',
						element: <OrderHistory></OrderHistory>,
					},
				],
			},

			{
				path: '/account',
				element: <Account></Account>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={routers}>
			<MainLayout></MainLayout>
		</RouterProvider>
	</React.StrictMode>,
);
