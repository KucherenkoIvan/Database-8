const { Router } = require('express');

const router = Router();

router.get('/api/*', (req, res) => {
    console.log('catched by GET placeholder');
    res.status(200).json({'catched-by': __filename});
});

module.exports = router;