var express = require('express');
var router = express.Router();

const { findStory } = require("../../../models/sad_story");


  router.get('/', function(req, res, next) {
    res.render('sad_story', { title: 'Sad' });
  });



  router.get('/:id', (req, res) => {

    findStory(req).then(story => {
      const storysad = story;
      let sadvalue = (Object.values(storysad[0]));
      let sad_story = sadvalue.toString();
      // console.log("sad story is ", sad_story.sad_story);
      res.format({
         'text/plain': () =>  res.send( { sad_story })
           // 'application/json': () => res.send ( { sad_story })
      });
    });
  });




module.exports = router;
