import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import CoinList from "./components/coinlist/CoinList";
import Receive from "./components/modal/Recieve";

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Header/>
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Switch>
            <Route exact path={"/"}>
              <CoinList />
            </Route>
            <Route exact path={"/coinlist"}>
              <CoinList />
            </Route>
            <Route exact path={"/receive"}>
              <Receive />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
