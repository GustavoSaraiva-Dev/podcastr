import styles from "./styles.module.scss";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import Switch from "react-switch";
import { useState, useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Header() {
	const { isDark, handleDark } = useContext(ThemeContext);
	const currentDate = format(new Date(), "EEEEEE, d MMMM", {
		locale: ptBR,
	});

	function CenteredIcon() {
		return (
			<div className={styles.centerSVG}>
				{isDark ? (
					<FaMoon size={18} color='#FFFFFF' />
				) : (
					<FaSun size={20} color='#FFFFFF' />
				)}
			</div>
		);
	}

	return (
		<header
			className={`${styles.headerContainer} ${
				isDark ? styles.Dark : styles.Light
			}`}>
			<img src={isDark ? `/logo-dark.svg` : `/logo.svg`} alt='Podcastr' />
			<p>O melhor para você ouvir, sempre</p>

			<span>{currentDate}</span>
			<Switch
				onChange={() => handleDark()}
				checked={isDark}
				className={styles.check}
				onColor={"#04D361"}
				checkedIcon={isDark && <CenteredIcon />}
				uncheckedIcon={!isDark && <CenteredIcon />}
				handleDiameter={22}
			/>
		</header>
	);
}
