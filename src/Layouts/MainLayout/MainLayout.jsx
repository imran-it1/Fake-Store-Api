import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

const MainLayout = () => {
	return (
		<>
			{/* Header */}
			<NavBar></NavBar>

			<div className=" container mx-auto min-h-screen py-20">
				<Outlet></Outlet>
			</div>

			{/* Footer */}
			<Footer></Footer>
		</>
	);
};

export default MainLayout;
