import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import InteractWithData from "./pages/interact-with-data/InteractWithData";
import Locations from "./pages/Locations";
import SchoolClosing from "./pages/playground/SchoolClosing";
import AirPollution from "./pages/AirPollution";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/interactwithdata" component={InteractWithData} />
        <Route exact path="/schoolclosing" component={SchoolClosing} />
        <Route exact path="/airpollution" component={AirPollution} />
      </Switch>
    </>
  );
}

export default App;
