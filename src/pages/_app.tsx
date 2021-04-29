import "../styles/global.scss";

import { Header } from "../components/Header";
import { Player } from "../components/Player";

import styles from "../styles/app.module.scss";
import { PlayerContextProvider } from "../contexts/PlayerContext";
import ThemeContextProvider, { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useState } from "react";
import Main from "../components/Main";

function MyApp({ Component, pageProps }) {
	const { isDark } = useContext(ThemeContext);
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(isDark);

	return (
		<ThemeContextProvider>
			<PlayerContextProvider>
				<div className={styles.wrapper}>
					<Main>
						<Header />
						<Component {...pageProps} />
					</Main>
					<Player />
				</div>
			</PlayerContextProvider>
		</ThemeContextProvider>
	);
}

export default MyApp;
