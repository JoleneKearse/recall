import { Link } from "react-router-dom";
import ModeToggle from "./ModeToggle";

const NavBar = () => {
	return (
		<nav className="flex items-center justify-between p-6">
			<div className="flex items-center justify-center p-6">
				<img
					src="/klingon.png"
          className="w-12"
					alt="Logo"
				/>
        <h1 className="text-xl"><span className="font-unlock font-semibold text-3xl">Recall:</span> Practice Your Stuff!</h1>
			</div>
      <ul className="flex items-center justify-center space-x-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/newGame">New Game</Link>
        </li>
        <li>
          <Link to="/practice">Practice</Link>
        </li>
        <li>
          <Link to="/scores">Scores</Link>
        </li>
      </ul>
      <ModeToggle />
		</nav>
	);
};

export default NavBar;
