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

					<button className=" px-3 py-1 bg-teal-400 rounded-md">
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
