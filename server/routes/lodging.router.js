const { response } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log('req.params in ldoging router get', req.params);
    let queryText = `SELECT * , 
    to_char("date", 'Mon DD, YYYY') AS "pretty_date",
    to_char("date", 'yyyy-MM-dd') AS "put_date" 
    FROM "lodging" WHERE "trip_id" = ${id} ORDER BY "date" DESC;`;
    pool.query(queryText)
    .then(result => {
        // console.log('result.rows in lodgingRouter.get', result.rows)
        res.send(result.rows);
        console.log('result.rows in lodging router get', result.rows)
    })
    .catch(error => {
        console.log('error in lodging router.get', error);
        res.sendStatus(500);
    })
});


router.post('/', (req, res) => {
    const { date, place, details, lat, lng, tripId} = req.body
    // console.log('req.body in lodging router.post', req.body);
    let queryText = `INSERT INTO "lodging" 
        ("date", "place", "details", "latitude", "longitude", "trip_id")
        VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(queryText, [date, place, details, lat, lng, tripId])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in lodging router.post', error);
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const queryText = `DELETE FROM "lodging" WHERE "id" = $1`;
    pool
    .query(queryText, [id])
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in lodging router.delete', error);
        res.sendStatus(500);
    })
    
})

module.exports = router;
