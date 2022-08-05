const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    let queryText = `SELECT id, location, 
    to_char("start_date", 'Mon DD, YYYY') AS "start", 
    to_char("end_date", 'Mon DD, YYYY') AS "end",
    to_char("start_date", 'yyyy-MM-dd') AS "put_start_date",
    to_char("start_date", 'yyyy-MM-dd') AS "put_end_date" from "trip" ORDER BY "start_date" DESC;`;
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

router.put('/:id', (req, res) => {
    // Update this single trip
    console.log('req.params', req.params)
    const idToUpdate = req.params.id;
    const sqlText = `UPDATE "trip" SET "start_date" = $1, "end_date" = $2, "location" = $3 WHERE id = $4`;
    pool.query(sqlText, [req.body.start, req.body.end, req.body.location, idToUpdate])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;
