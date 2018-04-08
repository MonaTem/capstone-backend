const knex = require("../db");

/********** HELPER FUNCTIONS ************/

// Find one
function findStory({params: { id }}) {
  return knex.select('sad_story').from('sad_story').where('char_id', id);
}

module.exports = {
  findStory
};
