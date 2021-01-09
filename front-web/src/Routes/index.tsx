import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Navbar from "../Navbar";
import Order from "../Orders";

function Routes(){
  return(
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/orders">
          <Order />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )

}
 
export default Routes;
