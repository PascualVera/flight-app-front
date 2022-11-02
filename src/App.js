import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TripContext from "./context/Context";
import LandingPage from "./pages/LandingPage/LandingPage";
import Reservation from "./pages/Reservation/Reservation";

function App() {
	const [currentTrip, setCurrentTrip] = useState("pinga");

	return (
		<TripContext.Provider value={{ currentTrip, setCurrentTrip }}>
			<Router>
				<div className="App">
					<Routes>
						<Route path="/" element={<LandingPage />}></Route>
						<Route path="/reservation" element={<Reservation />}></Route>
					</Routes>
				</div>
			</Router>
		</TripContext.Provider>
	);
}

export default App;
