import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Component
import Home from "./pages/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
