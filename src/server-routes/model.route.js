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

    const data = (await models[modelName].findAll());

    res.json(data);
})

router.post('/delete/:modelName', async (req, res) => {
    const model = models[req.params.modelName];
    const {id, user} = req.body;
    const candidate = await model.findOne({where: {id}});

    try {
        (await candidate.destroy());
        res.json({status: '200/OK'});
    } catch (e) {
        return res.status(500).json({
            error: {
                msg: e.message
            }
        })
    }
})

router.post('/:modelName', async (req, res) => {
    const {modelData} = req.body;
    delete modelData.id;

    if (req.params.modelName === 'User') {
        return res.redirect(307, '../auth/register');
    }

    const model = models[req.params.modelName];

    Object.keys(modelData).forEach(key => modelData[key] === '' && (modelData[key] = null));


    if (!model) {
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
        console.log(modelData)
        let candidate = new model(modelData);
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

router.patch('/:modelName', async (req, res) => {
    const {modelData} = req.body;

    const model = models[req.params.modelName];
    console.log(modelData)

    if (!model) {
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

        Object.keys(modelData).forEach(key => modelData[key] === '' && (modelData[key] = null));

        let candidate = await model.findOne({where: {id: modelData.id}});


        Object.keys(modelData).forEach(key => candidate[key] = modelData[key]);

        await candidate.save();

        return res.json(candidate);

        model.fields.forEach((fieldName) => {
            query += modelData[fieldName] ? `'${modelData[fieldName]}',` : 'null,';
        });

        query += `'${req.body.user}'`;

        const data = await sequelize.query(query);
        return res.json(data);
    } catch (e) {
        console.warn('vvv')
        return res.status(500).json({
            error: {
                msg: e.message
            }
        })
    }
})

module.exports = router;
