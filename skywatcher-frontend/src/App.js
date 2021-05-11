import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import InteractWithData from "./pages/interact-with-data/InteractWithData";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/interactwithdata" component={InteractWithData} />
      </Switch>
    </>
  );
}

export default App;
