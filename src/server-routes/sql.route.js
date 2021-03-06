const { Router } = require('express');
const sequelize = require('../sequelize');

const router = Router();

router.get('/api/sql/:sql', async (req, res) => {
    const queryString = req.params.sql;
    console.log(req.params);
    try {
        const result = await sequelize.query(queryString)
        res.json(result[0]);
    } catch (e) {
        res.json(e.message);
    }
});

module.exports = router;