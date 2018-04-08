const knex = require("../db");

/********** HELPER FUNCTIONS ************/

// Find one
function findStory({params: { id }}) {
  return knex.select('happy_story').from('happy_story').where('char_id', id);
}

module.exports = {
  findStory
};
