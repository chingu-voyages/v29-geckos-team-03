import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import  Navbar from './pages/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact='/' component={Landing} />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
