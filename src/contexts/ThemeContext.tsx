import { createContext, ReactNode, useContext, useState } from "react";

type ThemeContextData = {
	isDark: boolean;
	handleDark: () => void;
};

interface ThemeContextProps {
	children: ReactNode;
}
export const ThemeContext = createContext({} as ThemeContextData);

function ThemeContextProvider({ children }: ThemeContextProps) {
	const [isDark, setIsDark] = useState(false);

	function handleDark() {
		setIsDark(!isDark);
	}
	return (
		<ThemeContext.Provider value={{ isDark, handleDark }}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContextProvider;
