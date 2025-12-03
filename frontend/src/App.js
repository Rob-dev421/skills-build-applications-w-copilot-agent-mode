
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Octofit Tracker</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/activities">Activities</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/teams">Teams</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card mt-5 mx-auto shadow rounded-4" style={{maxWidth: '600px'}}>
              <div className="card-body p-5">
                <h1 className="card-title display-6 fw-bold text-center mb-4">Octofit Tracker</h1>
                <p className="card-text text-center text-muted mb-4">Track your fitness activities, join teams, compete on the leaderboard, and get personalized workout suggestions.</p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <NavLink to="/activities" className="btn btn-outline-dark px-4 py-2 rounded-pill">Activities</NavLink>
                  <NavLink to="/leaderboard" className="btn btn-outline-dark px-4 py-2 rounded-pill">Leaderboard</NavLink>
                  <NavLink to="/teams" className="btn btn-outline-dark px-4 py-2 rounded-pill">Teams</NavLink>
                  <NavLink to="/users" className="btn btn-outline-dark px-4 py-2 rounded-pill">Users</NavLink>
                  <NavLink to="/workouts" className="btn btn-outline-dark px-4 py-2 rounded-pill">Workouts</NavLink>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
