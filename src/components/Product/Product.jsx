import { Link } from 'react-router-dom';

const Product = ({ product }) => {
	const { id, image, title, price } = product;

	return (
		<div className=" bg-gray-50 p-5 rounded-lg ">
			<div className="flex h-full flex-col items-center">
				<figure>
					<img
						className="w-[250px] h-[250px]"
						src={image}
						alt="product image"
					/>
				</figure>
				<div className=" mt-auto text-center">
					<p>Product ID: {id}</p>
					<p>{title}</p>
					<p>{price}</p>

					<button
						type="button"
						className="text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						<Link
							to={`/products/${id}`}
							className=" text-white font-bold"
						>
							See Deatils
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
