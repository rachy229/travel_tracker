const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const lodgingRouter = require('./routes/lodging.router');
const hikeRouter = require('./routes/hike.router');
const flightRouter = require('./routes/flight.router');
const otherRouter = require('./routes/other.router');
const tripRouter = require('./routes/trip.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/lodging', lodgingRouter);
app.use('/api/hike', hikeRouter);
app.use('/api/flight', flightRouter);
app.use('/api/other', otherRouter);
app.use('/api/trip', tripRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
