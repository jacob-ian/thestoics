import "./App.css";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Stoic from "./components/Stoic";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { getStoics } from "./api/stoics";

function App(props) {
  const stoics = getStoics();

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact={true} path="/stoic/:id">
            <Stoic />
          </Route>
          <Route exact={true} path="/">
            <Home stoics={stoics} />
          </Route>
          <Route exact={true} path="/404">
            <NotFound />
          </Route>
          <Route path="*">
            <Redirect
              to={{
                pathname: "/404",
                search: `path=${useLocation().pathname}`,
              }}
            />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
