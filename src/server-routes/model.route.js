const { Router } = require('express');
const sequelize = require('../sequelize');

const models = {
    CourierInfo: {
        proc_names: {
            insert: 'insert_courierInfo',
            update: 'update_courierInfo',
            delete: 'delete_courierInfo',
        },
        fields: [
            'CourierID',
            'BirthDate',
            'Address',
            'Phone',
        ],
    },
    Courier: {
        proc_names: {
            insert: 'insert_courier',
            update: 'update_courier',
            delete: 'delete_courier',
        },
        fields: [
            'FName',
            'MName',
            'LName',
            'Salary',
            'PriorSalary',
        ]
    },
    Customer: {
        proc_names: {
            insert: 'insert_customer',
            update: 'update_customer',
            delete: 'delete_customer',
        },
        fields: [
            'FName',
            'MName',
            'LName',
            'Address',
            'City',
            'Phone',
        ]
    },
    Product: {
        proc_names: {
            insert: 'insert_product',
            update: 'update_product',
            delete: 'delete_product',
        },
        fields: [
            'Name',
            'Description'
        ]
    },
    Stocks: {
        proc_names: {
            insert: 'insert_stocks',
            update: 'update_stocks',
            delete: 'delete_stocks',
        },
        fields: [
            'ProductID',
            'Qty',
        ]
    },
    Order: {
        proc_names: {
            insert: 'insert_order',
            update: 'update_order',
            delete: 'delete_order',
        },
        fields: [
            'CustomerID',
            'ClientID',
            'OrderDate',
        ]
    },
    OrderDetails: {
        proc_names: {
            insert: 'insert_orderDetails',
            update: 'update_orderDetails',
            delete: 'delete_orderDetails',
        },
        fields: [
            'OrderID',
            'LineItem',
            'ProductID',
            'Qty',
            'Price',
        ]
    },
    User: {
        proc_names: {
            delete: 'delete_user',
        }
    },
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

    const data = (await sequelize.query(`select * from "${modelName}"`))[0];

    res.json(data);
})

router.post('/delete/:modelName', async (req, res) => {
    const model = models[req.params.modelName];
    const {id, user} = req.body;
    const query = `EXEC ${model.proc_names.delete} ${id}, '${user}'`;

    try {
        (await sequelize.query(query));
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
        let query = `EXEC ${model.proc_names.insert} `;

        model.fields.forEach((fieldName) => {
            query += modelData[fieldName] ? `'${modelData[fieldName]}',` : 'null,';
        });

        query += `'${req.body.user}'`;

        const data = await sequelize.query(query);
        return res.json(data);
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

    // проверить на работоспособность
    if (req.modelName === 'User') {
        req.body.login = modelData.login;
        req.body.password = modelData.password;
        req.body.accessLevel = modelData.accessLevel;

        res.redirect('../auth/register');
    }

    const model = models[req.params.modelName];

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

        let query = `EXEC ${model.proc_names.update} ${modelData.id},`;

        model.fields.forEach((fieldName) => {
            query += modelData[fieldName] ? `'${modelData[fieldName]}',` : 'null,';
        });

        query += `'${req.body.user}'`;

        const data = await sequelize.query(query);
        return res.json(data);
    } catch (e) {
        return res.status(500).json({
            error: {
                msg: e.message
            }
        })
    }
})

module.exports = router;
