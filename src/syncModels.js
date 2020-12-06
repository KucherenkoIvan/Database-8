const { log } = require('./log');
const sequelize = require('./sequelize');
sequelize.sync();

const models = [
    require('./models/CourierInfo.model'),
    require('./models/Courier.model'),
    require('./models/Customer.model'),
    require('./models/Product.model'),
    require('./models/Stocks.model'),
    require('./models/Order.model'),
    require('./models/OrderDetails.model')
];

(async () => {
    for (element of models) {
        element.sync().then(element => log(element.tableName + ' synced')).catch(() => process.exit(-1));
    }
})().then(() => log('done'))

