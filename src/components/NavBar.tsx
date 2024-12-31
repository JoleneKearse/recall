import { useContext } from "react";
import { NavLink } from "react-router-dom";
import HamburgerContext from "../context/HamburgerContext";
import ModeToggle from "./ModeToggle";

const NavBar = () => {
	const { isMenuOpen, toggleMenu } = useContext(HamburgerContext);

	return (
		<nav className="flex items-center justify-between w-full p-6">
			<div className="flex items-center justify-center p-6">
				<img
					src="/klingon.png"
					className="w-14 drop-shadow-lg"
					alt="Logo"
				/>
				<h1 className="text-md md:text-lg lg:text-xl">
					<span className="font-unlock text-3xl drop-shadow-md">Recall:</span>{" "}
					Practice Your Stuff!
				</h1>
			</div>
			{/* Hamburger */}
			<button
				onClick={toggleMenu}
				className="md:hidden p-4 order-3 text-brand-900 dark:text-brand-300"
				aria-label="Open menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={4}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
			{/* Menu */}
			<ul
				className={`${
					isMenuOpen
						? "flex flex-col justify-center items-center gap-8 bg-brand-100 dark:bg-brand-900 dark:text-brand-300 absolute -top-0 bottom-0 left-0 right-0 text-xl"
						: "hidden"
				} md:flex md:items-center md:space-x-6 md:justify-center absolute md:static top-16 left-0 w-full lg:w-auto bg-white md:bg-transparent p-4 lg:p-0`}
			>
				<li>
					<button
						onClick={toggleMenu}
						aria-label="Close menu"
					>
						<svg
							width="300"
							height="298"
							viewBox="0 0 300 298"
							className="w-10 h-10 absolute top-4 right-4 md:hidden"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M55.5 137C25.0535 99.8473 38.4999 0 38.4999 0C49.721 86.2654 74.0869 120.033 157.5 148C157.5 148 85.5994 173.729 55.5 137Z"
								fill="currentColor"
							/>
							<path
								d="M137.739 248.354C100.587 280.398 0.739487 266.246 0.739487 266.246C87.0049 254.436 120.773 228.791 148.739 141C148.739 141 174.469 216.674 137.739 248.354Z"
								fill="currentColor"
							/>
							<path
								d="M252.141 160.76C282.587 197.913 269.141 297.76 269.141 297.76C257.92 211.495 233.554 177.727 150.141 149.76C150.141 149.76 222.041 124.031 252.141 160.76Z"
								fill="currentColor"
							/>
							<path
								d="M162.26 54.7605C199.413 24.3141 299.26 37.7604 299.26 37.7604C212.995 48.9815 179.227 73.3474 151.26 156.76C151.26 156.76 125.531 84.8599 162.26 54.7605Z"
								fill="currentColor"
							/>
						</svg>
					</button>
				</li>
				<li>
					<img
						src="/klingon.png"
						className={`${isMenuOpen ? "w-20 drop-shadow-lg" : "hidden"}`}
						alt="Logo"
					/>
				</li>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "text-brand-500 font-unlock cursor-not-allowed"
								: "hover:font-extrabold hover:drop-shadow-links hover:underline hover:underline-offset-4 hover:decoration-4"
						}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/newGame"
						className={({ isActive }) =>
							isActive
								? "text-brand-500 font-unlock cursor-not-allowed"
								: "hover:font-extrabold hover:drop-shadow-links hover:underline hover:underline-offset-4 hover:decoration-4"
						}
					>
						New Game
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/practice"
						className={({ isActive }) =>
							isActive
								? "text-brand-500 font-unlock cursor-not-allowed"
								: "hover:font-extrabold hover:drop-shadow-links hover:underline hover:underline-offset-4 hover:decoration-4"
						}
					>
						Practice
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/scores"
						className={({ isActive }) =>
							isActive
								? "text-brand-500 font-unlock cursor-not-allowed"
								: "hover:font-extrabold hover:drop-shadow-links hover:underline hover:underline-offset-4 hover:decoration-4"
						}
					>
						Scores
					</NavLink>
				</li>
			</ul>
			{!isMenuOpen && <ModeToggle />}
		</nav>
	);
};

export default NavBar;
