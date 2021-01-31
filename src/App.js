import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
{/* <h1>{title}</h1>
        <p>Likes {likes}</p>
        <p>{10}</p>
        <p>{[1,2,3,4,5]}</p> */}
        {/*<p>{Math.random()}</p>*/}
        {/*<a href={link}>Google</a>*/}
export default App;
