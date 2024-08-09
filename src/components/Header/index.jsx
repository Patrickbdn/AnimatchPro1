import React from "react";
import logo from "../../assets/logo.jpg";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<img src={logo} className={styles.logo} alt="logo" />
			<NavBar />
		</header>
	);
};

export default Header;
