const { Router } = require('express');
const sequelize = require('../sequelize');

const router = Router();

router.get('/api/sql', async (req, res) => {
    const queryString = req.query.sql;
    console.log(req.query);
    try {
        const result = await sequelize.query(queryString)
        res.json(result);
    } catch (e) {
        res.json(e.message);
    }
});

module.exports = router;