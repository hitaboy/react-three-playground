import './App.scss';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'
import Menu from './Menu.js'
import Experiment1 from './experiments/e_1'
import Experiment2 from './experiments/e_2'
import Experiment3 from './experiments/e_3'
import Experiment4 from './experiments/e_4'

function App() {
  return (
    <Router>
      
        <>
          <Menu />
          <Switch>
            <Route path="/e_1">
              <Experiment1 />
            </Route>
            <Route path="/e_2">
              <Experiment2 />
            </Route>
            <Route path="/e_3">
              <Experiment3 />
            </Route>
            <Route path="/e_4">
              <Experiment4 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </>
      
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
