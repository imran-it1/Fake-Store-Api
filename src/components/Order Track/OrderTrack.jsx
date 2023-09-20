import image from '../../assets/TrackOrder.png';

const OrderTrack = () => {
	return (
		<div>
			<figure>
				<img className="w-80 mx-auto" src={image} alt="" />
			</figure>

			<h2 className="text-2xl font-semibold mb-4 text-center">
				Please Place an order to track order
			</h2>
		</div>
	);
};

export default OrderTrack;
