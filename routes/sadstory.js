var express = require('express');
var router = express.Router();


router.get('/sadstory/:id',  (req, res) => {

  let id = req.params.id;
  console.log('sadstory get');

  knex.raw("SELECT sad_story FROM sad_story where char_id = id").then(rows => {
    console.log("we are in the router.get for /sad_story!!" + rows);
   })
   .then( rows => {
      console.log( rows );
      return response.text( rows );
});
});

module.exports = router;
