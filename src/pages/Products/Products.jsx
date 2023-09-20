import { useLoaderData } from 'react-router-dom';
import Product from '../../components/Product/Product';

const Products = () => {
	const products = useLoaderData();

	return (
		// Products Page

		<div>
			<div className=" text-center mb-10">
				<h1 className="text-3xl font-medium">
					Your Favorite Products are here....
				</h1>
			</div>
			<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{products.map((product) => (
					<Product key={product.id} product={product}></Product>
				))}
			</div>
		</div>
	);
};

export default Products;
