import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./Pages/Main";
import { Zemanat2 } from "./Pages/Zemaanat/screens/Zemanat2";
import { Zemaanat1 } from "./Pages/Zemaanat/screens/Zemaanat1";
import { Zemaanet3 } from "./Pages/Zemaanat/screens/Zemaanat3";
import SaftehayeMan1 from "./components/SaftehayeMan/screens/SaftehayeMan1";
import { Sodoor1 } from "./components/sodoor/screens/sodoor1";
import { Sodoor4 } from "./components/sodoor/screens/sodoor4";
import { ContinueProcess } from "./Pages/ContinueProcess";
import { DeleteRequest } from "./Pages/DeleteRequest";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { getData } from "./store/safteData/safteData.action";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // ?nationalNumber=0481301302
    axios
      .get(
        "https://6358f6efff3d7bddb99528fa.mockapi.io/api/safteData/saftehDatas?nationalNumber=0481301302"
      )
      .then((res) => {
        dispatch(getData(res.data[0]));
        console.log(res.data[0]);
      })
      .catch((e) => console.log("e: ", e));
  }, []);
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
            <Route path="/sodoor" component={Sodoor1} />
            {/* sub pathes */}
            <Route path="/sign_payment" component={Zemaanet3} />
            <Route path="/payment" component={Sodoor4} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
