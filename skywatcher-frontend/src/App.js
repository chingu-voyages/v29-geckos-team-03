import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/layout/Navbar";
import InteractWithData from "./pages/interact-with-data/InteractWithData";
import Footer from "./components/layout/Footer";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/interactwithdata" component={InteractWithData} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
