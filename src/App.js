import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/stoic/:name"></Route>
        <Route path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
