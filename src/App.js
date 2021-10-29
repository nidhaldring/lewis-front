import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./navbar";
import SideMenu from "./sidemenu";
import { close } from "./store/slices/sideMenu";
import SideBar from "./sidebar";
import Home from "./home";

function App() {
  const isOpen = useSelector((state) => state.sideBar.isOpen);
  const dispatch = useDispatch();

  return (
    <Router>
      <SideMenu></SideMenu>
      <div
        className={`flex flex-col  ${isOpen ? "ml-64" : ""}`}
        onClick={() => dispatch(close())}
      >
        <NavBar></NavBar>
        <div className="flex-grow flex overflow-hidden">
          <div
            className={`${
              isOpen ? "hidden sm:block sm:w-3/5" : "w-full"
            } transition-all duration-300`}
          >
            <Home></Home>
          </div>
          <div
            className={`${
              isOpen ? "w-full" : "hidden sm:block sm:-mr-72"
            } sm:w-2/5 transition-all duration-300`}
          >
            <SideBar></SideBar>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
