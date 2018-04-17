const knex = require("../db");

/********** HELPER FUNCTIONS ************/

// Find one
function findStory({params: { id }}) {
  console.log('id is definitely ', id);
  console.log('in findStory for happy_story');
  // console.log('APP_MODE is ', APP_MODE);
  return knex.select('happy_story').from('happy_story').where('char_id', id).orderByRaw('RANDOM()').limit(1);
  // return knex.raw("SELECT happy_story from happy_story WHERE char_id = id ORDER BY RANDOM() LIMIT 1");
}

module.exports = {
  findStory
};
