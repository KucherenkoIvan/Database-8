const { Router } = require('express');
const sequelize = require('../sequelize');

const models = {
    CourierInfo: require('../models/CourierInfo.model'),
    Courier: require('../models/Courier.model'),
    Customer: require('../models/Customer.model'),
    Product: require('../models/Product.model'),
    Stocks: require('../models/Stocks.model'),
    Order: require('../models/Order.model'),
    OrderDetails: require('../models/OrderDetails.model'),
    User: require('../models/User.model'),
};

const router = Router();

router.get('/:modelName', async (req, res) => {
    const {modelName} = req.params;

    if (!models[modelName]) {
        return res.status(500).json({
            error: {
                msg: 'No such model'
            }
        })
    }

    const data = await models[modelName].findAll();

    res.json(data);
})

router.post('/:modelName', async (req, res) => {
    const {modelData} = req.body;    
    delete modelData.id;
    const {modelName} = req.params;

    if (!models[modelName]) {
        return res.status(500).json({
            error: {
                msg: 'No such model'
            }
        })
    }

    if (!modelData) {
        return res.status(500).json({
            error: {
                msg: 'No data provided'
            }
        })
    };

    try {
        const candidate = new models[modelName](modelData);
        await candidate.save();
        return res.json(candidate);
    } catch (e) {
        return res.status(500).json({
            error: {
                msg: e.message
            }
        })
    }
})

module.exports = router;
