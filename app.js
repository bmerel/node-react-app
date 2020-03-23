const express = require('express');
const config = require('./config.json')
const userRouter = require('./routes/userRoute');
const teamRouter = require('./routes/teamRoute');
const swaggerRouter = require('./routes/swaggerRoute');

const app = express();

const serverConfig = config['development']['server'];
const port = serverConfig['port'];

app.use('/', userRouter);
app.use('/', teamRouter);
app.use('/', swaggerRouter);

app.listen(port, () => {
  console.log(`Listening On Port ${port}!`)
});
