import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
	const singleProduct = useLoaderData();

	const { image, title, category, description, price, rating } =
		singleProduct;
	const { rate, count } = rating;

	const navigate = useNavigate();
	const handleGoBack = () => {
		navigate('/products');
	};

	return (
		<div>
			<div className=" text-center mb-10">
				<h1 className="text-3xl font-medium">
					Details of this product{' '}
				</h1>
			</div>

			<div className=" flex items-center">
				<div className="w-2/5">
					<img
						className="w-[350px] h-[350px]"
						src={image}
						alt="product-image"
					/>
				</div>

				<div className="w-3/5">
					<p>{title}</p>
					<p>{category}</p>
					<p>{description}</p>
					<p>{price}</p>
					<p>{rate}</p>
					<p>{count}</p>

					<div className=" flex gap-2 items-center">
						<button className=" px-3 py-1 bg-teal-400 rounded-md">
							<Link className=" text-white font-bold">
								Buy Now
							</Link>
						</button>
						<button
							onClick={handleGoBack}
							className=" px-3 py-1 bg-teal-400 rounded-md"
						>
							<Link className=" text-white font-bold">
								Go Back
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
