import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import WeekPage from './weekpage';
import DayPage from './daypage';

const ReactRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/week">Week</Link></li>
        <li><Link to="/day">Day</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/week" component={WeekPage}/>
      <Route path="/day" component={DayPage}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Week = () => (
  <div>
    <h2>Week</h2>
  </div>
)

const Day = ({ match }) => (
  <div>
    <h2>Day</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default ReactRouter;