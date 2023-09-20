import image from '../../assets/OrderHistory.png';

const OrderHistory = () => {
	return (
		<div>
			<figure>
				<img className="w-80 mx-auto" src={image} alt="" />
			</figure>
			<h2 className="text-2xl font-semibold mb-4 text-center">
				Please Place an order to see the order hisory
			</h2>
		</div>
	);
};

export default OrderHistory;
