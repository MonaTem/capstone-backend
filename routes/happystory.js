var express = require('express');
var router = express.Router();

const { findStory } = require("../models/happystory");


router.get('/', function(req, res, next) {
  res.render('happystory', { title: 'Happy' });
});


router.get('/:id', (req, res) => {

  findStory(req).then(story => {
    const storyhappy = story;
    // console.log('happy story is ', happystory);
    let happyvalue = (Object.values(storyhappy[0]));
    let happystory = happyvalue.toString();

    // const happyparse = JSON.parse(happystory);
    // console.log('happy parse is ', happyparse);
    res.format({
       'text/plain': () =>  res.send( { happystory })
      // 'application/json': () => res.send ( { happyvalue })
    });
  });
});


module.exports = router;
