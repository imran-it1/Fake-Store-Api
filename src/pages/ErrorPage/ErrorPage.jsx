import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<div className=" flex justify-center items-center flex-col gap-5">
			<h1 className="text-7xl text-center">oops!!!</h1>
			<Link to={'/'}>
				<button type="submit" className="btn btn-primary">
					Home
				</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
