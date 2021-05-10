import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import InteractWithData from "./pages/interact-with-data/InteractWithData";
import SchoolClosing from "./pages/playground/SchoolClosing";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/interactwithdata" component={InteractWithData} />
        <Route exact path="/schoolclosing" component={SchoolClosing} />
      </Switch>
    </>
  );
}

export default App;
