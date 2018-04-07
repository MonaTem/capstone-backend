const knex = require("../db");

/********** HELPER FUNCTIONS ************/

// Find one
function findStory({params: { id }}) {
  return knex('happy_story').where('char_id', id);
}

module.exports = {
  findStory
};
