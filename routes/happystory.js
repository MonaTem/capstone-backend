var express = require('express');
var router = express.Router();

const findStory = require("../models/happystory");


router.get('/', function(req, res, next) {
  res.render('happystory', { title: 'Happy' });
});


router.get('/:id', (req, res) => {

  findStory(req).then(story => {
    const happystory = stories[0];
    res.format({
      'text/html': () =>  res.send( { happystory })
    });
  });
});


module.exports = router;
