import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ModeToggle = () => {
	const { toggleTheme } = useContext(ThemeContext);
	return (
		<>
			<label className="relative inline-flex items-center cursor-pointer">
				<input
					className="sr-only peer"
					value=""
					type="checkbox"
					onChange={toggleTheme}
					role="switch"
          aria-checked="false"
          aria-label="Toggle dark mode"
				/>
				<div className="peer ring-2 ring-gray-500 bg-gradient-to-r from-accent-red-100 to-accent-red-200 rounded-full outline-none duration-500 w-20 h-8 shadow-inner peer-checked:bg-gradient-to-r peer-checked:from-accent-purple peer-checked:to-accent-violet shadow-neutral-800 peer-focus:ring-4 peer-focus:ring-gray-500 relative after:absolute after:w-12 after:h-12 after:top-[-8px] after:left-[-8px] after:bg-klingon after:bg-contain after:bg-no-repeat peer-checked:after:translate-x-14">
</div>

			</label>
		</>
	);
};

export default ModeToggle;
