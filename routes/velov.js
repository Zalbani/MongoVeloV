var router = require('express').Router();

var velov = require('../models/velov');


router.get('/', (req, res) => {
    velov.find({}).then(velov => {
        res.render('velov/index.html', {velov: velov })
    });
});


module.exports = router;

