import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
const NavBar = () => {
	return (
		<div>
			<nav className=" bg-white shadow-xl py-2">
				<div className="container mx-auto flex items-center justify-between">
					<div className=" flex items-center gap-3">
						<figure>
							<img
								className="w-[60px] hover:scale-105 hover:cursor-pointer"
								src={logo}
								alt="logo"
							></img>
						</figure>
						<Link to={'/'} className="text-xl font-bold">
							My Shop
						</Link>
					</div>

					<ul className=" flex items-center gap-12 text-base font-medium">
						<li className="flex justify-center items-center underline hover:underline hover:decoration-2 hover:underline-offset-2 hover:text-green-500 transition-all duration-200 ease-in">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive
										? ' text-white bg-green-500 px-4 py-1 rounded-md '
										: ''
								}
							>
								Home
							</NavLink>
						</li>
						<li className="flex justify-center items-center underline hover:underline hover:decoration-2 hover:underline-offset-2  hover:text-green-500 transition-all duration-200 ease-in">
							<NavLink
								to="/products"
								className={({ isActive }) =>
									isActive
										? ' text-white bg-green-500 px-4 py-1 rounded-md'
										: ''
								}
							>
								Products
							</NavLink>
						</li>
						<li className="flex justify-center items-center underline hover:underline hover:decoration-2 hover:underline-offset-2  hover:text-green-500 transition-all duration-200 ease-in">
							<NavLink
								to="/contact"
								className={({ isActive }) =>
									isActive
										? ' text-white bg-green-500 px-4 py-1 rounded-md'
										: ''
								}
							>
								Contact US
							</NavLink>
						</li>
						<li className="flex justify-center items-center underline hover:underline hover:decoration-2 hover:underline-offset-2  hover:text-green-500 transition-all duration-200 ease-in">
							<NavLink
								to="/dashboard"
								className={({ isActive }) =>
									isActive
										? ' text-white bg-green-500 px-4 py-1 rounded-md'
										: ''
								}
							>
								Dashboard
							</NavLink>
						</li>
					</ul>

					<div>
						<ul className="text-base font-medium">
							<li className=" bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full hover:underline hover:decoration-2 hover:underline-offset-2 hover:decoration-white transition-all duration-200 ease-in">
								<NavLink
									to="/account"
									className={({ isActive }) =>
										isActive ? ' text-white' : ''
									}
								>
									Account
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
