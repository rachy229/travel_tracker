const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "lodging" ORDERBY "date" DESC;`;
    pool.query(queryText)
    .them(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error in lodging router.get', error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
