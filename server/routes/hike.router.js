const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    let queryText = `SELECT * FROM "hike" WHERE "trip_id" = ${id};`;
    // console.log('req.params in hike router.get', req.params);
    // console.log('id in hike router.get', id);
    pool.query(queryText)
    .then(result => {
        // console.log('result.rows in hikeRouter.get', result.rows)
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error in hike router.get', error);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    const { date, place, details, tripId} = req.body
    // console.log('req.body in hike router.post', req.body);
    let queryText = `INSERT INTO "hike" 
        ("date", "place", "details", "trip_id")
        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [date, place, details, tripId])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in hike router.post', error);
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const queryText = `DELETE FROM "hike" WHERE "id" = $1`;
    pool
    .query(queryText, [id])
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in hike router.delete', error);
        res.sendStatus(500);
    })
    
})

module.exports = router;