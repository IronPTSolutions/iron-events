import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Events from './screens/Events';
import EventForm from './components/events/EventForm';
import EventDetail from './components/events/EventDetail';
import Login from './screens/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container pt-4 pb-5">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/create-event" component={EventForm} />
          <Route exact path="/events/:id" component={EventDetail} />
          <Redirect to="/events" />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
