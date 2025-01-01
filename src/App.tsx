import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
// import { PracticePage } from "./pages/PracticePage";

function App() {
	return (
		<ThemeProvider>
			<Routes>
				{/* TODO: Navigate to newGame when authorized */}
				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						index
						element={<HomePage />}
					/>
					{/* <Route
						path="/practice"
						element={<PracticePage />}
					/> */}
				</Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
