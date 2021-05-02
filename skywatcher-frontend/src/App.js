import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import  Navbar from './components/Navbar';
import InteractWithData from './pages/InteractWithData';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/interactwithdata' component={InteractWithData} />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
