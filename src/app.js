const express = require('express');
const config = require('config');
const sequelize = require('./sequelize');

const APP_PORT = config.get('app-port') || 5000; 

const app = express();

app.listen(APP_PORT, () => {
    console.log(`App has been started on port ${APP_PORT}`);
});

app.get('/', (req, res) => {
    res.redirect('/api/test');
});

app.get('/api/test', (req, res) => {
    console.log({to: req.url, params: req.params});
    res.json({status: 'ok'});
});

app.use(require('./server-routes/sql.route.js'));
app.use(require('./server-routes/placeholder.route.js'));

(async () => {
  try {
    console.log('connecting to the database...');
    await sequelize.sync();
    console.log('database connected');
  } catch (e) {
    console.log('connection failed');
    console.error(e);
    process.exit(-1);
  }
})();


