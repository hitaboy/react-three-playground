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
import Experiment5 from './experiments/e_5'
import Experiment6 from './experiments/e_6'
import Experiment7 from './experiments/e_7'
import Experiment8 from './experiments/e_8'

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
            <Route path="/e_5">
              <Experiment5 />
            </Route>
            <Route path="/e_6">
              <Experiment6 />
            </Route>
            <Route path="/e_7">
              <Experiment7 />
            </Route>
            <Route path="/e_8">
              <Experiment8 />
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
  return (
    <div className="center">
      <h1>React-Three-Playground</h1>
      <hr></hr>
      <h2>The examples use react, react-router, react-three-fiber and @react-three/drei</h2>
      <p>Open menu and choose an example</p>
    </div>
  )
}

export default App;
