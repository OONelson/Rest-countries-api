// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CountryList from "./components/CountryList";
import Country from "./components/Country";
import Error from "./components/Error";
import { useState } from "react";
function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [toggleName, setToggleName] = useState("Dark Mode");

	const toggleBtn = () => {
		setDarkMode((back) => !back);
		setToggleName((prevName) =>
			prevName === "Dark Mode" ? "Light Mode" : "Dark Mode"
		);
	};

	return (
		<BrowserRouter>
			<div className={`app ${darkMode ? "top-header-dark-mode" : ""}`}>
				<Header onClick={toggleBtn} toggleName={toggleName} />
				<Routes>
					<Route path="/" element={<CountryList darkMode={darkMode} />}></Route>
					<Route
						path="/:name"
						element={<Country darkMode={darkMode} />}
					></Route>
					<Route path="*" element={<Error />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
