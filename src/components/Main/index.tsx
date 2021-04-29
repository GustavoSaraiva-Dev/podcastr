import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import styles from "./styles.module.scss";

interface MainProps {
	children: ReactNode;
}

function Main({ children }: MainProps) {
	const { isDark } = useContext(ThemeContext);
	return (
		<main className={`${styles.Main} ${isDark ? styles.Dark : styles.Light}`}>
			{children}
		</main>
	);
}

export default Main;
