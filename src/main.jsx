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

const routers = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,

		children: [
			{
				path: '/',
				element: <HomePage></HomePage>,
				errorElement: <ErrorPage></ErrorPage>,
			},
			{
				path: '/products',
				element: <Products></Products>,
				loader: () => fetch('https://fakestoreapi.com/products'),
			},

			{
				path: '/contact',
				element: <Contact></Contact>,
			},

			{
				path: '/dashboard',
				element: <Dashboard></Dashboard>,
			},

			{
				path: '/products/:Id',
				element: <ProductDetails></ProductDetails>,
				loader: ({ params }) =>
					fetch(`https://fakestoreapi.com/products/${params.Id}`),
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
