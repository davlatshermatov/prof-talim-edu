import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Sidebar />} />
      </Routes>
    </div>
  );
}

export default App;
