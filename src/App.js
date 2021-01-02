import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/">
        <h1>Home</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
      <Route path="/line">
        <h1>Line-2</h1>
      </Route>
    </Router>
  );
}

export default App;
