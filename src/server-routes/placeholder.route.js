const { Router } = require('express');

const router = Router();

router.get('/api/*', (req, res) => {
    console.log('catched by GET placeholder at ' + req.path);
    res.status(200).json({'catched-by': __filename});
});

router.post('/api/*', (req, res) => {
    console.log('catched by POST placeholder at ' + req.path);
    res.status(200).json({'catched-by': __filename});
});

module.exports = router;