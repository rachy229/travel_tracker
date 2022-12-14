const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log('req.params in other router get')
    let queryText = `SELECT *, to_char("date", 'Mon DD, YYYY') AS "pretty_date",
    to_char("date", 'yyyy-MM-dd') AS "put_date"
    FROM "other" WHERE "trip_id" = ${id} ORDER BY "date" DESC;`;
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
    //if the user is an admin, allow them to post
    if (req.user.clearance === 2) {
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
    } else {
        res.sendStatus(403);
    }
});

router.delete('/:id', (req, res) => {
    //if the user is an admin, allow them to post
    if (req.user.clearance === 2) {
        const id = req.params.id;
        console.log('id in other router delete', id)
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
    } else {
        res.sendStatus(403);
    }
})

router.put('/:id', (req, res) => {
    // Update this single hike
    console.log('req.params', req.params)
    const idToUpdate = req.params.id;
    console.log('req.body', req.body);
    const sqlText = `UPDATE "other" SET "date" = $1, "place" = $2, "details" = $3 WHERE id = $4`;
    pool.query(sqlText, [req.body.put_date, req.body.place, req.body.details, idToUpdate])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;
