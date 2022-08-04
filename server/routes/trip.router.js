const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    let queryText = `SELECT id, location, 
    to_char("start_date", 'Mon DD, YYYY') AS "start", 
    to_char("end_date", 'Mon DD, YYYY') AS "end" from "trip" ORDER BY "start" DESC;`;
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error in trip router.get', error);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    const { startDate, endDate, place} = req.body
    let queryText = `INSERT INTO "trip" 
        ("start_date", "end_date", "location")
        VALUES ($1, $2, $3);`;
    pool.query(queryText, [startDate, endDate, place])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in trip router.post', error);
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const queryText = `DELETE FROM "trip" WHERE "id" = $1`;
    pool
    .query(queryText, [id])
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in trip router.delete', error);
        res.sendStatus(500);
    })
    
})

module.exports = router;
