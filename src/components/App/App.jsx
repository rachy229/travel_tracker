import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

//form componenets
import LodgingForm from '../LodgingForm/LodgingForm';
import HikeForm from '../HikeForm/HikeForm';
import FlightForm from '../FlightForm/FlightForm';
import OtherForm from '../OtherForm/OtherForm';

//dashboard componenets
import TripDashboard from '../TripDashboard/TripDashboard';
import HikeDashboard from '../HikeDashboard/HikeDashboard';
import FlightDashboard from '../FlightDashboard/FlightDashboard';
import LodgingDashboard from '../LodgingDashboard/LodgingDashboard';

import './App.css';
import EditLodging from '../EditLodging/EditLodging';
import AddNewItem from '../AddNewItem/AddNewItem';
import TripList from '../TripList/TripList';
import TripForm from '../TripForm/TripForm';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />


          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <ProtectedRoute exact path="/trips">
            <TripList />
          </ProtectedRoute>

          <ProtectedRoute exact path="/new-trip">
            <TripForm />
          </ProtectedRoute>

          <ProtectedRoute exact path="/new">
            <AddNewItem />
          </ProtectedRoute>

          <ProtectedRoute exact path="/lodging">
            <LodgingForm />
          </ProtectedRoute>

          <ProtectedRoute exact path="/hike">
            <HikeForm />
          </ProtectedRoute>

          <ProtectedRoute exact path="/flight">
            <FlightForm />
          </ProtectedRoute>

          <ProtectedRoute exact path="/other">
            <OtherForm />
          </ProtectedRoute>

          {/* <ProtectedRoute exact path="/dashboard">
            <TripDashboard />
          </ProtectedRoute> */}

          <ProtectedRoute exact path="/dashboard/:id">
            <TripDashboard />
          </ProtectedRoute>

          <ProtectedRoute exact path="/lodging-dashboard/:id">
            <LodgingDashboard />
          </ProtectedRoute>

          <ProtectedRoute exact path="/hike-dashboard/:id">
            <HikeDashboard />
          </ProtectedRoute>

          <ProtectedRoute exact path="/flight-dashboard/:id">
            <FlightDashboard />
          </ProtectedRoute>

          <ProtectedRoute exact path="/edit-lodging">
            <EditLodging />
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
