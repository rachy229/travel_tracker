const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "other";`;
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error in other router.get', error);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    const { date, place, details, tripId} = req.body
    // console.log('req.body in hike router.post', req.body);
    let queryText = `INSERT INTO "other" 
        ("date", "place", "details", "trip_id")
        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [date, place, details, tripId])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in other router.post', error);
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const queryText = `DELETE FROM "other" WHERE "id" = $1`;
    pool
    .query(queryText, [id])
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in other router.delete', error);
        res.sendStatus(500);
    })
    
})

module.exports = router;
