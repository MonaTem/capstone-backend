exports.seed =  async function(knex, Promise) {
  // Deletes ALL existing entries
  await knex('main_character').del();
  await knex.raw("ALTER TABLE main_character ALTER COLUMN id RESTART WITH 1");
  await knex('story_beginning').del();
  await knex('story_middle').del();
  await knex('happy_ending').del();
  await knex('sad_ending').del();
  await knex('story_middle').del();
  await knex('happy_ending').del();
  await knex('sad_ending').del();
  await knex.raw("INSERT INTO main_character (character_name) VALUES ('Bear')");
  await knex.raw("INSERT INTO main_character (character_name) VALUES ('Princess')");
  await knex.raw("INSERT INTO main_character (character_name) VALUES ('Woodcutter')");
  await knex.raw("INSERT INTO main_character (character_name) VALUES ('Witch')");
  await knex.raw("INSERT INTO main_character (character_name) VALUES ('Fairy Queen')");
  await knex.raw("INSERT INTO main_character (character_name) VALUES ('Ogre')");
  await knex.raw("INSERT INTO story_beginning (story_beginning_snippet, char_id) VALUES ('Once upon a time there was a talking bear that loved to eat berries and fish.  One day he was out catching fish and rooting around for berries when he encountered the woodcutter.  The woodcutter was hungry and he thought 'Ah!  Fresh bear meat for dinner!'  He strung his bow and got ready to kill the bear.', 1)");
  await knex.raw("INSERT INTO story_middle (story_middle_snippet, char_id) VALUES ('But the bear had other ideas.  He did not care to be dinner for anyone. The bear cried 'Go away and leave me alone...rooooaarr!!!'' He turned and lashed out at his persecutor', 1)");
  await knex.raw("INSERT INTO happy_ending (happy_ending_snippet, char_id) VALUES ('The bear\U+0027\s pursuer took to his heels and ran away as fast as he could.  The bear ambled away happily and resumed his fishing and berry hunting. Everyone lived happily ever after', 1)");
  await knex.raw("INSERT INTO sad_ending (sad_ending_snippet, char_id) VALUES ('The bear\U+0027\s pursuer turned and shot an arrow into the bear. The bear did not die right away, but he roared in pain and struck out at the human with his claws.  The human died on the spot.  No one lived happily ever after', 1)");
};
