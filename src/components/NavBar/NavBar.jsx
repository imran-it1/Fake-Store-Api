import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
const NavBar = () => {
	return (
		<div>
			<nav className=" bg-white shadow-xl py-5">
				<div className="container mx-auto flex items-center justify-between">
					<div className=" flex items-center gap-3">
						<figure>
							<img src={logo} alt="Shop-Logo" />
						</figure>
						<Link to={'/'}>My Shop</Link>
					</div>

					<ul>
						<li className=" flex items-center gap-8">
							<NavLink to={'/'}>Home</NavLink>
							<NavLink to={'/products'}>Products</NavLink>
							<NavLink to={'/contact'}>Contact US</NavLink>
							<NavLink to={'/dashboard'}>Dashboard</NavLink>
						</li>
					</ul>

					<div>
						<NavLink to={'/account'}>Account</NavLink>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
