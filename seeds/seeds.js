exports.seed =  async function(knex, Promise) {
  // Deletes ALL existing entries
  await knex('main_character').del();
  await knex.raw("ALTER TABLE main_character ALTER COLUMN id RESTART WITH 1");
  await knex('happy_story').del();
  await knex('sad_story').del();
  await knex.raw("INSERT INTO main_character (character_name) VALUES ('Bear')");
  await knex.raw("INSERT INTO main_character (character_name) VALUES ('Princess')");
  await knex.raw("INSERT INTO main_character (character_name) VALUES ('Witch')");
  await knex.raw("INSERT INTO main_character (character_name) VALUES ('Woodcutter')");
  await knex.raw("INSERT INTO main_character (character_name) VALUES ('Fairy')");
  await knex.raw("INSERT INTO main_character (character_name) VALUES ('Ogre')");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a talking bear that loved to eat berries and fish.  One day he was out catching fish and rooting around for berries when he encountered the woodcutter.  The woodcutter was hungry and he thought Ah!  Fresh bear meat for dinner! He strung his bow and got ready to kill the bear. But the bear had other ideas.  He did not care to be dinner for anyone. The bear cried ''Go away and leave me alone...rooooaarr!!!'' He turned and lashed out at his persecutor. The bear''s pursuer took to his heels and ran away as fast as he could.  The bear ambled away happily and resumed his fishing and berry hunting. Everyone lived happily ever after', 1)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a princess imprisoned inside a tree trunk. A witch, jealous of the princess''s beauty and her long blonde hair, had tricked the princess, whose name was Arabella, into walking into the woods very late one night by turning into an owl, alighting on Arabella''s window sill, and hooting.  Then when Arabella awoke, the witch/owl flew into the woods and turned back into a witch.  The mean witch then cast a spell that imprisoned the Princess inside a nearby tree trunk. No one heard the princess''s cries for help or her knocking on the inside of the tree, except a frog.  The frog, named Marvin, went and found his buddy the bear who was very strong.  The bear ripped open the tree and pulled the Princess out.  Then he turned into a handsome prince and married the princess.  Everyone lived happily ever after, even the witch, who turned into a frog and married Marvin.', 2)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a sweet Witch who liked people and animals.  But people assumed that all Witches were wicked so they ran away whenever they saw her.  This made the Witch sad and lonely, as all she wanted was to make friends.  One day, the Witch was sitting in her little house in the woods feeling very lonely when there was a loud knock on the door.  When the Witch opened the door, she saw a little girl and her puppy.   The little girl said in a little voice, ''My mother told me never to speak to strangers, especially witches, but I''m completely lost in these woods, so I have no choice.  Please don''t bake me and my puppy in an oven. The Witch felt a bit insulted at first, but the girl and her puppy looked so forlorn, that the Witch put her feelings aside and welcomed them into her hut.  She gave the child cookies that she''d baked and made dog biscuits for the puppy.   Then she took them home to the girl''s worried parents, who were overjoyed that their daughter was safe.  From then on, everyone knew that the Witch was nice. The Witch made lots of friends. Everyone lived happily ever after.', 3)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a Woodcutter who lived in a cottage in the woods.  He was enjoying a nice dinner when there was a loud banging on his door.  A beautiful Princess stood in his doorway crying.  The Woodcutter invited her into his cottage, and sat her down by his nice roaring fire.  ''How can I help\\?'' the Woodcutter inquired.  The Princess sobbed, ''My dog Fifi has run away!  Can you help me find her\\?'' Then there was a scratching noise at the door and a doggy whine.  The Woodcutter let in the sopping wet, rainy dog, who immediately shook herself and got water all over the Woodcutter''s nice upholstered chairs.  The Woodcutter snarled at the stupid dog, but the Princess was overjoyed and the dog leaped into her arms.  The Woodcutter smiled and decided it was time for new chairs anyway.  Everyone lived happily ever after.', 4)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a Fairy who loved casting spells to create beautiful shiny gossamer objects like dragonflies and spiderwebs and other indescribable stuff. The Fairy decided she needed a special steed to travel to distant lands outside of Fairyland.  So she cast an extra special spell and created an amazing giant unicorn dragonfly with translucent opalescent wings in rainbow colors. The Fairy hopped on her gorgeous giant dragonfly unicorn and flew it to the Elfin Lands, where she lived happily ever after.', 5)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was an Ogre who loved chocolate, animal crackers, and peanuts.  He was also fond of children, ponies, and kittens. He was a gentle soul, but since he was big and scary looking, people (especially children) were afraid of him. Then one day the Ogre rescued a terrified kitten from a Witch that had captured it.  The Ogre found a cave and made a bed from soft blankets there.  The kitten purred and was happy, warm, and safe.  The Ogre had found a friend, so he was happy too.  Everyone lived happily ever after.', 6)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time there was a talking bear that loved to eat berries and fish.  One day he was out catching fish and rooting around for berries when he encountered the woodcutter.  The woodcutter was hungry and he thought Ah!  Fresh bear meat for dinner! He strung his bow and got ready to kill the bear. But the bear had other ideas.  He did not care to be dinner for anyone. The bear cried ''Go away and leave me alone...rooooaarr!!!'' He turned and lashed out at his persecutor. The bear''s pursuer turned and shot an arrow into the bear. The bear did not die right away, but he roared in pain and struck out at the human with his claws.  The human died on the spot.  No one lived happily ever after.', 1)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time, there was a Princess who was in love with a Bear.  The Bear had long red hair and so did the Princess. One day the Bear met a beautiful girl bear in a lavender dress and matching cape. He fell in love with her.  The Bear forgot about the Princess and married the female bear.  The bears lived happily ever after. The Princess was very, very sad and lonely.  She cried herself to sleep.', 2)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time there was a very nasty Witch who ate puppies, kittens, and children as snacks. Two children and their dog came calling on the Witch.  She tried to put them all in her oven.  But the children pushed the Witch into the oven and ran away.  The kids lived happily ever after, but that was the end of that wicked Witch and her house burned down too.', 3)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time there was a Woodcutter who lived in a cottage in the woods.  He was enjoying a nice dinner when there was a loud banging on his door. He opened the door and there stood and Ogre holding a troll upside down by the heels.  The troll was squirming and shouting, ''Hey, you dumb Woodcutter, are you going to help me or are you going to just stand there and stare\\?'' The Woodcutter got mad and slammed the door.  He heard a lot of snarling and screaming and scratching outside the door and in the morning he found a dead Ogre and a passed out troll lying in a heap on his doorstep.  No one lived happily ever after, except maybe the Woodcutter.', 4)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time there was a Fairy who loved an elf.  The elf mostly ignored her as he was kind of stuck on himself and mostly ignored everyone else. The Fairy started pining away as she was really crazy about the elf who barely noticed her.  She lost weight, didn''t eat, and became listless and pale (well, paler, she was pale to begin with). The elf went away to war and never even said anything to the Fairy.  The Fairy was never the same again.  She lost her joy.  No one lived happily ever after, including the elf, who was shot by an arrow.', 5)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time there was a mean Ogre who went around bashing people against large rocks.  People were afraid of the Ogre and would run and hide when the Ogre approached.  A donkey started braying and the Ogre couldn''t stand the sound so he grabbed the donkey to dash its head against stones. But the Woodcutter heard the poor donkey braying and he went to chop the Ogre''s head off with his ax.  But before he could do it, the Ogre tossed him and the donkey into the river.  They swam to safety fortunately, but the Ogre was still around to terrorize people.  No one lived happily ever after.', 6)");
};
