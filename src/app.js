const express = require('express');
const config = require('config');
const sequelize = require('./sequelize');
const { log, error, success } = require('./log');

const APP_PORT = config.get('app-port') || 5000; 

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/api/test');
});

app.get('/api/test', (req, res) => {
    console.log({to: req.url, params: req.params});
    res.json({status: 'ok'});
});

app.use(require('./server-routes/sql.route.js'));
app.use('/api/auth/', require('./server-routes/auth.route.js'));
app.use('/api/model/', require('./server-routes/model.route.js'));

app.use(require('./server-routes/placeholder.route.js'));

(async () => {
  try {
    log('Connecting to the database');
    await sequelize.sync();
    success('Connection established');
  } catch (e) {
    error('Connection failed');
    process.exit(-1);
  }
})().then( () => {
  app.listen(APP_PORT, () => {
    success(`Server running on port ${APP_PORT}`);
  });
});





