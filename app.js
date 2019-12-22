const express = require('express');
const config = require('./config/config.json')
const userRouter = require('./routes/userRoute');
const teamRouter = require('./routes/teamRoute');
const swaggerRouter = require('./routes/swaggerRoute');

const app = express();

const environmentConfig = config['development'];
const port = environmentConfig['server']['port'];

app.use('/', userRouter);
app.use('/', teamRouter);
app.use('/', swaggerRouter);


app.listen(port, () => {
  console.log(`Listening On Port ${port}!`)
});
