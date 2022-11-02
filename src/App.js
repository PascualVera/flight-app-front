import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage/LandingPage";
import Reservation from "./pages/Reservation/Reservation";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<LandingPage />}></Route>
					<Route path="/reservation" element={<Reservation />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
