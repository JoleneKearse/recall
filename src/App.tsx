import { Routes, Route, Navigate, Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<ThemeProvider>
			<Routes>
				{/* TODO: Navigate to newGame when authorized */}
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/newGame"
					element={<Navigate to="/newGame" />}
				/>
				<Route
					path="/practice"
					element={<Navigate to="/practice" />}
				/>
				<Route
					path="/scores"
					element={<Navigate to="/scores" />}
				/>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
