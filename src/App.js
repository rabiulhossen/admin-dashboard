import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MiddleDash from "./components/MiddleDash/MiddleDash";

function App() {
  return (
    <div className="App">
      <div className="app-glass">
        <Sidebar />
        <MiddleDash />
      </div>
    </div>
  );
}

export default App;
