var express = require('express');
var app = express.Router();


app.get('api/stories/happy_story/:id', (req, res) => {

  let id = req.params.id;
  console.log('happy_story get');

  knex.raw("SELECT happy_story FROM happy_story where char_id = id").then(rows => {
    console.log("we are in the app.get for /happy_story!!" + rows);
   })
   .then( rows => {
      console.log( rows );
      return response.text( rows );
});
});

module.exports = app;
