import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Zemaanat1 } from "./components/Zemaanat/screens/Zemaanat1";
import { Main } from "./Pages/Main";
import { Zemanat2 } from "./components/Zemaanat/screens/Zemanat2";


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
            <Route path="/zemaanat" component={Zemanat2} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
