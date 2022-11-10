import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./Pages/Main";
import { Zemanat2 } from "./Pages/Zemaanat/screens/Zemanat2";
import { Zemaanat1 } from "./Pages/Zemaanat/screens/Zemaanat1";
import { Zemaanet3 } from "./Pages/Zemaanat/screens/Zemaanat3";
import SaftehayeMan1 from "./components/SaftehayeMan/screens/SaftehayeMan1";
import { ContinueProcess } from "./Pages/ContinueProcess";
import { DeleteRequest } from "./Pages/DeleteRequest";

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
            <Route path="/continueProcess" component={ContinueProcess} />
            <Route path="/saftehaye-man" component={SaftehayeMan1} />
            <Route path="/delete-request" component={DeleteRequest} />
            <Route path="/continue" component={ContinueProcess} />
            {/* subPathes */}
            <Route path="/pardakht" component={Zemaanet3} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
