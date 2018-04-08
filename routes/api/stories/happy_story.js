happy_storyvar express = require('express');
var router = express.Router();

const { findStory } = require("../models/happy_story");


router.get('/', function(req, res, next) {
  res.render('happy_story', { title: 'Happy' });
});


router.get('/:id', (req, res) => {

  findStory(req).then(story => {
    const storyhappy = story;
    // console.log('happy story is ', happy_story);
    let happyvalue = (Object.values(storyhappy[0]));
    let happy_story = happyvalue.toString();

    // const happyparse = JSON.parse(happy_story);
    // console.log('happy parse is ', happyparse);
    res.format({
       'text/plain': () =>  res.send( { happy_story })
      // 'application/json': () => res.send ( { happyvalue })
    });
  });
});


module.exports = router;
