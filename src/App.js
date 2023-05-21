// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SumPage from "./Pages/SumPage";
import SubPage from "./Pages/SubPage";


const App = () => {
	return (
		<BrowserRouter>
			<Routes>
		  		<Route path="/" element={<Home />} />
		 	 	<Route path="/sum/:a/:b" element={<SumPage />} />
		  		<Route path="/sub/:a/:b" element={<SubPage />} />
			</Routes>
	  </BrowserRouter>
	);
  };

export default App;