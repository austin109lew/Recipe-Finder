const session = require('express-session');
const passport = require('./config/passport');
const authRoutes = require('./controllers/authController');

app.use('/', authRoutes);
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
