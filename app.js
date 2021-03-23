const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const dirTree = require('directory-tree');

const app = express();

//load controller
//const authController = require('./controllers/authController');
const errorController = require('./controllers/errorController');

//load routes
const userRoutes = require('./routes/userRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const themeRoutes = require('./routes/themeRoutes');
const adminRoutes = require('./routes/adminRoutes');

//enable proxy
app.enable('trust-proxy');

//cors
app.use(cors());
app.options('*', cors());

//set security http header
app.use(helmet());

//rate limit
app.use(
  '*',
  rateLimit({
    max: 10000,
    windowMs: 60 * 60 * 1000,
    message: 'Too many http request, please try again in a hour',
  })
);

//body parser
app.use(express.json({ limit: '50mb' }));
app.use(
  express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 })
);
app.use(cookieParser());

//Database request sanitize against nosql injection
app.use(mongoSanitize());

// Data clean against xss attack
app.use(xss());

//prevent parameter pollution
app.use(hpp());

app.use(compression());

//log with morgan
app.use(morgan('dev'));

//isLogged in
//app.use(authController.isLoggedIn());
//routes
app.use('/api/v1/themes', themeRoutes);
app.use('/api/v1/uploads', uploadRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/admin', adminRoutes);

//public folder for theme
app.use('/html-preview', express.static(__dirname + '/html-theme-uploads'));

//theme preview link
app.get('/html-preview/:filename/*', (req, res) => {
  const { filename } = req.params;
  //move files to parent directory
  const tree = dirTree(`html-theme-uploads/${req.file.filename}/`);
  if (tree.children.length === 1 && tree.children[0].type === 'directory') {
    extraFolderName = tree.children[0].name;

    res.sendFile(
      path.resolve(
        __dirname,
        'html-theme-uploads',
        filename,
        extraFolderName,
        'index.html'
      )
    );
  } else {
    res.sendFile(
      path.resolve(__dirname, 'html-theme-uploads', filename, 'index.html')
    );
  }
});

// set static folder
app.use(express.static('client/out'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'out', 'index.html'));
});

//error controller
app.use(errorController);

//export app
module.exports = app;
