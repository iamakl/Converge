import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import MLogin from './components/mentorlogin';
import Profile from './components/profile';
import MProfile from './components/mentor_profile';
import NewBooking from './components/new_booking';
import Sform from './components/sessionform';
import Sessions from './components/sessions';
import MSessions from './components/mentor_sessions';
import Dashboard from './components/mentor_dashboard';
import MWingman from './components/mentor_wingman';
import MRefer from './components/mentor_refer';
import MReferA from './components/mentor_referaspirants';
import ARefer from './components/aspirants_refer';

function App() {
  return (
    <Router>
    <div className="App">
    <Route path="/" exact component={Home} />
    <Route path="/LoginAspirants" component={Login} />
    <Route path="/LoginMentors" component={MLogin} />
    <Route path="/Profile" component={Profile} />
    <Route path="/MentorProfile" component={MProfile} />
    <Route path="/NewBooking" component={NewBooking} />
    <Route path="/SessionForm" component={Sform} />
    <Route path="/Sessions" component={Sessions} />
    <Route path="/MentorSessions" component={MSessions} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/MentorWingMan" component={MWingman} />
    <Route path="/MentorRefer" component={MRefer} />
    <Route path="/MentorReferAspirants" component={MReferA} />
    <Route path="/AspirantsRefer" component={ARefer} />
    </div>
    </Router>
  );
}

export default App;
