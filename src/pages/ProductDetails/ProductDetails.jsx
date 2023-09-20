import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
	const singleProduct = useLoaderData();

	const { image, title, category, description, price, rating } =
		singleProduct;
	const { rate } = rating;

	const navigate = useNavigate();
	const handleGoBack = () => {
		navigate('/products');
	};

	return (
		<div className="h-full tracking-wide leading-relaxed">
			<div className=" text-center mb-10">
				<h1 className="text-3xl font-medium">Product Details Page</h1>
			</div>

			<div className=" flex justify-center items-center h-full">
				<div className="w-2/5">
					<img
						className="w-[350px] h-[350px]"
						src={image}
						alt="product-image"
					/>
				</div>

				<div className="w-3/5">
					<div className=" flex flex-col gap-3">
						<p className=" text-xl font-medium">{title}</p>
						<p className=" text-xl font-medium">{category}</p>
						<p className=" text-base text-gray-600">
							{description}
						</p>
						<p>
							<span className=" text-xl font-bold">Price: </span>$
							<span className=" font-semibold">{price}</span>
						</p>
						<p>
							<span className=" text-xl font-bold">Rating:</span>
							<span className=" font-semibold"> {rate}</span>
						</p>
					</div>

					<div className=" flex gap-2 items-center mt-4">
						<div className=" mt-2">
							<button
								type="button"
								className="text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
							>
								<Link className=" text-white font-bold">
									Buy Now
								</Link>
							</button>
						</div>
						<div className=" mt-2">
							<button
								onClick={handleGoBack}
								type="button"
								className="text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
							>
								<Link
									to={`/products`}
									className=" text-white font-bold"
								>
									Go Back
								</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
