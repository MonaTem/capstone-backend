var express = require('express');
var router = express.Router();


router.get('/sadstory/:id',  (req, res) => {

  router.get('/', function(req, res, next) {
    res.render('sadstory', { title: 'Happy' });
  });


  router.get('/:id', (req, res) => {

    findStory(req).then(story => {
      const sadstory = stories[0];
      res.format({
        'text/html': () =>  res.send( { sadstory })
      });
    });
  });




module.exports = router;
