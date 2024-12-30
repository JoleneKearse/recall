import { NavLink } from "react-router-dom";
import ModeToggle from "./ModeToggle";

const NavBar = () => {
	return (
		<nav className="flex items-center justify-between w-full p-6">
			<div className="flex items-center justify-center p-6">
				<img
					src="/klingon.png"
					className="w-14 drop-shadow-lg"
					alt="Logo"
				/>
				<h1 className="text-xl">
					<span className="font-unlock text-3xl drop-shadow-md">Recall:</span>{" "}
					Practice Your Stuff!
				</h1>
			</div>
			<ul className="flex items-center justify-center space-x-6">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "text-brand-500 cursor-not-allowed"
								: "hover:font-extrabold hover:drop-shadow-links hover:underline hover:underline-offset-4 hover:decoration-4"
						}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/newGame"
						className="hover:font-extrabold hover:drop-shadow-links hover:underline hover:underline-offset-4 hover:decoration-4"
					>
						New Game
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/practice"
						className="hover:font-extrabold hover:drop-shadow-links hover:underline hover:underline-offset-4 hover:decoration-4"
					>
						Practice
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/scores"
						className="hover:font-extrabold hover:drop-shadow-links hover:underline hover:underline-offset-4 hover:decoration-4"
					>
						Scores
					</NavLink>
				</li>
			</ul>
			<ModeToggle />
		</nav>
	);
};

export default NavBar;
