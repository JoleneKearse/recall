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
					width="247"
					height="168"
					viewBox="0 0 247 168"
					fill="none"
					className="w-10"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M126.852 1.5904C185.22 -5.66545 242.25 33.4342 242.25 33.4342C136.145 9.52441 106.312 16.8116 9.5777 64.8428C9.5777 64.8428 33.3098 39.7237 67.8292 22.9165C86.0118 12.7714 106.621 4.10537 126.852 1.5904Z"
						fill="currentColor"
					/>
					<path
						d="M122.161 45.4453C180.529 38.1895 242.25 78.3368 242.25 78.3368C192.724 67.1766 158.793 62.5849 126.852 65.7458C116.977 66.9734 106.592 69.3118 96.1675 72.3404C94.219 72.9065 92.4435 73.2167 90.8707 73.3231C75.7229 77.6303 61.0923 83.0117 48.3265 88.2675C35.1416 93.9727 20.8625 100.765 4.88673 108.698C4.88673 108.698 65.0317 52.5472 122.161 45.4453Z"
						fill="currentColor"
					/>
					<path
						d="M246.941 122.192C140.836 98.2819 96.9299 119.702 0.195755 167.733C0.195755 167.733 60.3407 104.836 117.47 97.7338C175.838 90.478 246.941 122.192 246.941 122.192Z"
						fill="currentColor"
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
