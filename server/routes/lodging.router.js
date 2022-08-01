const { response } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "lodging";`;
    pool.query(queryText)
    .then(result => {
        console.log('result.rows in lodgingRouter.get', result.rows)
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error in lodging router.get', error);
        res.sendStatus(500);
    })
});


router.post('/', (req, res) => {
    const { date, place, details, lat, lng} = req.body
    let queryText = `INSERT INTO "lodging" 
        ("date", "place", "details", "latitude", "longitude")
        VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [date, place, details, lat, lng])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in lodging router.post', error);
    })
});

module.exports = router;
