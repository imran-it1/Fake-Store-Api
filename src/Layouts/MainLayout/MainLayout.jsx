import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import ScaleLoader from 'react-spinners/ScaleLoader';

const MainLayout = () => {
	const navigation = useNavigation();
	return (
		<>
			{/* Header */}
			<NavBar></NavBar>

			{navigation.state === 'loading' ? (
				<div className="min-h-screen flex justify-center items-center">
					<ScaleLoader color="#5fd636" />
				</div>
			) : (
				<div className=" container mx-auto min-h-screen py-20">
					<Outlet></Outlet>
				</div>
			)}

			{/* Footer */}
			<Footer></Footer>
		</>
	);
};

export default MainLayout;
