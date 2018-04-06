const app = require('express').Router();


app.get('api/stories/:id/sad_story',function(req,res)
{
  let id = req.params.id;

  knex.raw("SELECT sad_story FROM sad_story where happy_story.id = id").then(rows => {
    console.log("we are in the app.get for /sad_story!!" + rows);
   })
   .then( rows => {
      console.log( rows );
      return response.text( rows );
});
});
