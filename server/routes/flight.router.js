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

router.post('/', (req, res) => {
    const { date, airline, departure_time, arrival_time, flight_number} = req.body
    let queryText = `INSERT INTO "flight" 
        ("date", "airline", "departure_time", "arrival_time", "flight_number")
        VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [date, airline, departure_time, arrival_time, flight_number])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in flight router.post', error);
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const queryText = `DELETE FROM "flight" WHERE "id" = $1`;
    pool
    .query(queryText, [id])
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in flight router.delete', error);
        res.sendStatus(500);
    })
    
})

module.exports = router;