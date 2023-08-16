import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { LoginContext } from "./context/LoginContext";
import Menu from "./components/Menu";

import "./App.css";

function App() {
    const { userLogged, config } = useContext(LoginContext);

    useEffect(() => {
        if (config[2].active) {
            document.querySelector("body").style.backgroundColor = "#292929";
        } else {
            document.querySelector("body").style.backgroundColor = "#FAF9FF";
        }
    }, [config]);

    return (
        <div className={`App ${config[2].active ? "dark" : ""}`}>
            {userLogged && <Menu />}
            <div className={userLogged ? "container" : ""}>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
