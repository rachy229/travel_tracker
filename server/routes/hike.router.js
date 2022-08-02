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

router.post('/', (req, res) => {
    const { date, place, details} = req.body
    console.log('req.body in hike router.post', req.body);
    let queryText = `INSERT INTO "hike" 
        ("date", "place", "details")
        VALUES ($1, $2, $3);`;
    pool.query(queryText, [date, place, details])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in hike router.post', error);
    })
});

module.exports = router;