//import logo from "./logo.svg";
//import "./App.css";
import "./bootstrap.min.css"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Create from "./component/Create";
import Showing from "./component/Showing"
import ListAll from "./component/ListAll";
import Editing from "./component/Editing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
{/* craete page */}
          <Route  exact path={"/new"}>
            <Create  />
          </Route>

  {/* List All */}
          <Route  exact path={"/"}>
            <ListAll />
          </Route>


           <Route exact path={"/edit/:id"}>
            <Editing/>
          </Route>

          <Route  exact path={"/author/:id"}>
           <Showing/>
          </Route> 

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
