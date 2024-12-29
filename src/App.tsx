import ModeToggle from "./components/ModeToggle";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<h1 className="">Recall</h1>
			<ModeToggle />
		</ThemeProvider>
	);
}

export default App;
