import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div>
			<div className=" flex ">
				<div className=" w-1/4 bg-rose-200 flex flex-col gap-5">
					<NavLink to={'/dashboard/profile'}>Profile</NavLink>
					<NavLink to={'/dashboard/edit-profile'}>
						Edit Profile
					</NavLink>
					<NavLink to={'/dashboard/order-track'}>Order Track</NavLink>
					<NavLink to={'/dashboard/order-history'}>
						Order History
					</NavLink>
				</div>

				<div className="w-3/4 bg-red-300">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
