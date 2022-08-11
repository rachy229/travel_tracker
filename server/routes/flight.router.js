const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id;
    console.log('id in flight router get', id)
    let queryText = `SELECT *, to_char("date", 'Mon DD, YYYY') AS "pretty_date",
    to_char("date", 'yyyy-MM-dd') AS "put_date",
    to_char("arrival_time", 'HH:mm') AS put_arrival,
    to_char("departure_time", 'HH:mm') AS "put_departure"
    FROM "flight" WHERE "trip_id" = ${id} ORDER BY "date" DESC;`;
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

router.post('/', rejectUnauthenticated, (req, res) => {

    if (req.user.clearance === 2) {

    const { date, airline, departure, arrival, flightNum, tripId} = req.body
    // console.log('req.body in flight router', req.body)
    // console.log('departure_time, arrival_time, flight_number om flight router',departure, arrival, flightNum)
    let queryText = `INSERT INTO "flight" 
        ("date", "airline", "departure_time", "arrival_time", "flight_number", "trip_id")
        VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(queryText, [date, airline, departure, arrival, flightNum, tripId])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in flight router.post', error);
    })
}else {
    res.sendStatus(403);
}
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.user.clearance', req.user.clearance)

    if (req.user.clearance === 2) {
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
} else {
    res.sendStatus(403);
}
})

router.put('/:id', rejectUnauthenticated, (req, res) => {
    if (req.user.clearance === 2) {
    // Update this single flight
    // console.log('req.params', req.params)
    const idToUpdate = req.params.id;
    // console.log('req.body', req.body);
    const sqlText = `UPDATE "flight" SET "date" = $1, "airline" = $2, "departure_time" = $3, "arrival_time" = $4, "flight_number" = $5 WHERE id = $6`;
    pool.query(sqlText, [req.body.put_date, req.body.airline, req.body.put_departure, req.body.put_arrival, req.body.flight_number, idToUpdate])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
    }else {
        res.sendStatus(403);
    }
});

module.exports = router;