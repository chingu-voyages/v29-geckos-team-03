import { Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <Switch>
        <Route exact='/' component={Landing} />
      </Switch>
    </>
  );
}

export default App;
