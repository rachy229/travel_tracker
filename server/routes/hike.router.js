const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "hike";`;
    pool.query(queryText)
    .then(result => {
        console.log('result.rows in hikeRouter.get', result.rows)
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error in hike router.get', error);
        res.sendStatus(500);
    })
});

module.exports = router;