import { useReducer } from "react";
import { Outlet } from "react-router-dom";
import { HamburgerProvider } from "../context/HamburgerContext";
import NavBar from "./NavBar";

const gameState = {
  category: null,
  difficulty: null,
  matches: 0,
  errors: 0,
  isPaused: false,
  time: 0,
};

interface GameState {
  category: string | null;
  difficulty: string | null;
  matches: number;
  errors: number;
  isPaused: boolean;
  time: number;
}

interface Action {
  type: string;
  payload?: any;
}

function gameReducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_DIFFICULTY":
      return { ...state, difficulty: action.payload };
    case "SET_MATCHES":
      return { ...state, matches: state.matches + 1 };
    case "SET_ERRORS":
      return { ...state, errors: state.errors + 1 };
    case "SET_PAUSED":
      return { ...state, isPaused: !state.isPaused };
    case "SET_TIME":
      return { ...state, time: action.payload };
    default:
      return state;
  }
};

const Layout = () => {
  const [state, dispatch] = useReducer(gameReducer, gameState);

	return (
    <HamburgerProvider>
      <NavBar />
      <Outlet context={{ state, dispatch }} />
    </HamburgerProvider>
  )
};

export default Layout;
