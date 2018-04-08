var express = require('express');
var router = express.Router();

const { findStory } = require("../models/sadstory");


  router.get('/', function(req, res, next) {
    res.render('sadstory', { title: 'Sad' });
  });



  router.get('/:id', (req, res) => {

    findStory(req).then(story => {
      const storysad = story;
      let sadvalue = (Object.values(storysad[0]));
      let sadstory = sadvalue.toString();
      // console.log("sad story is ", sadstory.sad_story);
      res.format({
         'text/plain': () =>  res.send( { sadstory })
           // 'application/json': () => res.send ( { sadstory })
      });
    });
  });




module.exports = router;
