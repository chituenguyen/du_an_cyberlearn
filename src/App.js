import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import LoginScreen from "./Screen/LoginScreen";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomeScreen/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
