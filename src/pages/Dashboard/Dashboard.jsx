import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div>
			<div className="flex gap-5 w-full">
				<ul className=" min-h-16 flex flex-col gap-5  w-1/4 bg-gray-100 rounded-lg px-5 py-10">
					<li className="flex items-center text-lg underline hover:underline hover:decoration-2 hover:underline-offset-2 hover:text-green-500 transition-all duration-200 ease-in">
						<NavLink
							to={'/dashboard/profile'}
							className={({ isActive }) =>
								isActive
									? ' text-white bg-green-500 hover:bg-green-600 px-4 py-1 rounded-sm shadow-md '
									: ''
							}
						>
							Profile
						</NavLink>
					</li>

					<li className="flex items-center text-lg underline hover:underline hover:decoration-2 hover:underline-offset-2 hover:text-green-500 transition-all duration-200 ease-in">
						<NavLink
							to={'/dashboard/edit-profile'}
							className={({ isActive }) =>
								isActive
									? ' text-white bg-green-500 hover:bg-green-600 px-4 py-1 rounded-sm shadow-md '
									: ''
							}
						>
							Edit Profile
						</NavLink>
					</li>

					<li className="flex items-center text-lg underline hover:underline hover:decoration-2 hover:underline-offset-2 hover:text-green-500 transition-all duration-200 ease-in">
						<NavLink
							to={'/dashboard/order-track'}
							className={({ isActive }) =>
								isActive
									? ' text-white bg-green-500 hover:bg-green-600 px-4 py-1 rounded-sm shadow-md '
									: ''
							}
						>
							Order Track
						</NavLink>
					</li>

					<li className="flex items-center text-lg underline hover:underline hover:decoration-2 hover:underline-offset-2 hover:text-green-500 transition-all duration-200 ease-in">
						<NavLink
							to={'/dashboard/order-history'}
							className={({ isActive }) =>
								isActive
									? ' text-white bg-green-500 hover:bg-green-600 px-4 py-1 rounded-sm shadow-md '
									: ''
							}
						>
							Order History
						</NavLink>
					</li>
				</ul>

				<div className="min-h-16 w-3/4 bg-gray-100 rounded-lg px-5 py-10">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
