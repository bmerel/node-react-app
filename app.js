const express = require('express');
const config = require('./configuration.json')
const userRouter = require('./routes/userRoute');
const teamRouter = require('./routes/teamRoute');
const swaggerRouter = require('./routes/swaggerRoute');

//
const app = express();

// import server configuration
// get server configuration values
const serverConfig = config['development']['server'];
const port = serverConfig['port'];

// assign routes
app.use('/', userRouter);
app.use('/', teamRouter);
app.use('/', swaggerRouter);

//
app.listen(port, () => {
  console.log(`Listening On Port ${port}!`)
});
