import { createContext, useState, ReactNode, useEffect } from "react";

const HamburgerContext = createContext({
	isMenuOpen: false,
	toggleMenu: () => {},
});

interface HamburgerProviderProps {
	children: ReactNode;
}

export const HamburgerProvider = ({ children }: HamburgerProviderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	useEffect(() => {
		if (isMenuOpen) {
			document.documentElement.classList.remove("hidden");
		} 
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
	};

	return (
		<HamburgerContext.Provider value={{ isMenuOpen, toggleMenu }}>
			{children}
		</HamburgerContext.Provider>
	);
};

export default HamburgerContext;
