import './App.scss';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from 'react-router-dom'
import Experiment_1 from './experiments/e_1.js'
import Experiment_2 from './experiments/e_2.js'

function App() {
  return (
    <Router>
      <>
        <h1>React Three Playground</h1>
        <>
          <>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Experiment_1">Exp_1</Link>
              </li>
              <li>
                <Link to="/Experiment_2">Exp_2</Link>

              </li>
            </ul>
          </>
          <>
            <Switch>
              <Route path="/experiment_1">
                <Experiment_1 />
              </Route>
              <Route path="/experiment_2">
                <Experiment_2 />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </>
        </>
      </>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
