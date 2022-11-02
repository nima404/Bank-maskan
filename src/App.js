import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Zemaanat1 } from "./components/Zemaanat/screens/Zemaanat1";
import { Main } from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="App-body">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/estelam" component={Zemaanat1} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
