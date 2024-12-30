import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ModeToggle = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<>
			<label className="relative inline-flex items-center cursor-pointer">
				<input
					className="sr-only peer"
					type="checkbox"
					onChange={toggleTheme}
					role="switch"
          aria-checked={theme === "dark"}
          aria-label="Toggle light and dark mode"
				/>
				<div className="peer ring-2 ring-brand-900 dark:ring-accent-red-300 bg-gradient-to-r from-accent-red-200 to-accent-red-300 rounded-full outline-none duration-500 w-20 h-8 shadow-inner peer-checked:bg-gradient-to-r peer-checked:from-accent-red-100 peer-checked:to-accent-red-200 shadow-neutral-800 peer-focus:ring-4 peer-focus:ring-gray-500 relative after:absolute after:w-12 after:h-12 after:top-[-8px] after:left-[-8px] after:bg-klingon after:bg-contain after:bg-no-repeat peer-checked:after:translate-x-14">
</div>

			</label>
		</>
	);
};

export default ModeToggle;
