const app = require('express').Router();


app.get('api/stories/:id/happy_story',function(req,res)
{
  let id = req.params.id;

  knex.raw("SELECT happy_story FROM happy_story where happy_story.id = id").then(rows => {
    console.log("we are in the app.get for /happy_story!!" + rows);
   })
   .then( rows => {
      console.log( rows );
      return response.text( rows );
});
});

    // res.send("I am Foo with id " + red.params.id);
});
