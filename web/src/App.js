import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Events from './screens/Events';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container pt-4 pb-5">
        <Switch>
          <Route exact path="/events" component={Events} />
          {/* Iteration 2: event detail path /events/:id */}
          <Redirect to="/events" />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
