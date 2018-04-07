var express = require('express');
var app = express.Router();


app.get('api/stories//sad_story/:id',  (req, res) => {

  let id = req.params.id;
  console.log('sad story get');

  knex.raw("SELECT sad_story FROM sad_story where char_id = id").then(rows => {
    console.log("we are in the app.get for /sad_story!!" + rows);
   })
   .then( rows => {
      console.log( rows );
      return response.text( rows );
});
});

module.exports = app;
