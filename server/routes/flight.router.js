const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "flight";`;
    pool.query(queryText)
    .then(result => {
        // console.log('result.rows in flightRouter.get', result.rows)
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error in flight router.get', error);
        res.sendStatus(500);
    })
});

module.exports = router;