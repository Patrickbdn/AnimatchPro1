import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout({ children }) {
	return (
		<div className="App">
			<Header />
			{children}
			<Footer />
		</div>
	);
}

export default MainLayout;
