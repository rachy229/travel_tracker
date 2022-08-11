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
    //if a user is an admin, allow them to post
    if (req.user.clearance === 2) {
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
    } else {
        res.sendStatus(403);
    }
});

router.delete('/:id', (req, res) => {
    if (req.user.clearance === 2) {
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
    } else {
        res.sendStatus(403);
    }
})

router.put('/:id', (req, res) => {
    if (req.user.clearance === 2) {
        // Update this single lodging item
        console.log('req.params', req.params)
        const idToUpdate = req.params.id;
        console.log('req.body', req.body);
        const sqlText = `UPDATE "lodging" SET "date" = $1, "place" = $2, "details" = $3, "latitude" = $4, "longitude" = $5 WHERE id = $6`;
        pool.query(sqlText, [req.body.put_date, req.body.place, req.body.details, req.body.latitude, req.body.longitude, idToUpdate])
            .then((result) => {
                res.sendStatus(200);
            })
            .catch((error) => {
                console.log(`Error making database query ${sqlText}`, error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});


module.exports = router;
