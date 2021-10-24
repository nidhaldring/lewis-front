import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./navbar";
import SideBar from "./sidebar";
import Home from "./home";

function App() {
  const isOpen = useSelector((state) => state.sideBar.isOpen);

  return (
    <Router>
      <div className="flex flex-col h-full">
        <NavBar></NavBar>
        <div className="flex-grow flex overflow-hidden">
          <div
            className={`${
              isOpen ? "w-full" : "w-3/5"
            } transition-all duration-300`}
          >
            <Home></Home>
          </div>
          <div
            className={`${
              isOpen ? "-mr-72" : "w-2/5"
            } transition-all duration-300`}
          >
            <SideBar></SideBar>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
