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
  await knex.raw("INSERT INTO main_character (character_name) VALUES ('Fabia')");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a talking bear that loved to eat berries and fish.  One day he was out catching fish and rooting around for berries when he encountered the woodcutter.  The woodcutter was hungry and he thought Ah!  Fresh bear meat for dinner! He strung his bow and got ready to kill the bear. But the bear had other ideas.  He did not care to be dinner for anyone. The bear cried ''Go away and leave me alone...rooooaarr!!!'' He turned and lashed out at his persecutor. The bear''s pursuer took to his heels and ran away as fast as he could.  The bear ambled away happily and resumed his fishing and berry hunting. Everyone lived happily ever after', 1)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a black bear named Mortimer.  Mortimer liked a swim on a hot day.  He was busy swimming and lazily fishing one fine summer day when along came a prince and his retinue on horseback.  The prince thought it would be very fine to impress a certain princess by presenting her with a bear head.  So he strung his bow and instructed his crew to do the same thing.  They were about the shoot the bear full of arrows, but along came a skunk name Abner.  Now Abner did not want to see his buddy Mortimer go belly up so he let loose with one of his skunky odors.  The prince and his men coughed and sputter and covered their faces with handkerchiefs.  It smelled so bad they couldn''t wait to get out of there.  They hightailed it away.  Mortimer, who had dove under the water to hide, came to the surface sputtering bubbles and presented Abner with a nice fat fish.  Everyone lived happily ever after, although the prince and his men had to burn most of their clothes, but they could afford to buy new oness.', 1)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a princess imprisoned inside a tree trunk. A witch, jealous of the princess''s beauty and her long blonde hair, had tricked the princess, whose name was Arabella, into walking into the woods very late one night by turning into an owl, alighting on Arabella''s window sill, and hooting.  Then when Arabella awoke, the witch/owl flew into the woods and turned back into a witch.  The mean witch then cast a spell that imprisoned the Princess inside a nearby tree trunk. No one heard the princess''s cries for help or her knocking on the inside of the tree, except a frog.  The frog, named Marvin, went and found his buddy the bear who was very strong.  The bear ripped open the tree and pulled the Princess out.  Then he turned into a handsome prince and married the princess.  Everyone lived happily ever after, even the witch, who turned into a frog and married Marvin.', 2)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a princess who loved a troll.  Everyone told her she couldn''t marry the troll, she had to marry a prince or a lord.   But the princess wanted to marry the troll.  So late one night, she disguised herself as a peasant woman and ran away from the palace.  She and the troll ran off and found a priest who agreed to marry them even though it was 2 o''clock in the morning.  The next morning, the troll turned into a handsome prince.  The couple returned triumphantly to the palace, and the king and queen were so overjoyed to get their daughter back safe and sound that they immediately forgave her.  The prince and princess had an official royal wedding and later on becamse the beloved rulers of the kingdom.  Everyone lived happily ever after.', 2)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a sweet Witch who liked people and animals.  But people assumed that all Witches were wicked so they ran away whenever they saw her.  This made the Witch sad and lonely, as all she wanted was to make friends.  One day, the Witch was sitting in her little house in the woods feeling very lonely when there was a loud knock on the door.  When the Witch opened the door, she saw a little girl and her puppy.   The little girl said in a little voice, ''My mother told me never to speak to strangers, especially witches, but I''m completely lost in these woods, so I have no choice.  Please don''t bake me and my puppy in an oven.'' The Witch felt a bit insulted at first, but the girl and her puppy looked so forlorn, that the Witch put her feelings aside and welcomed them into her hut.  She gave the child cookies that she''d baked and made dog biscuits for the puppy.   Then she took them home to the girl''s worried parents, who were overjoyed that their daughter was safe.  From then on, everyone knew that the Witch was nice. The Witch made lots of friends. Everyone lived happily ever after.', 3)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a Witch who went out flying on her broom late at night.  One night, during a full moon, she was flying over the deep dark forest when her broom decided it had had enough and dumped her into the trees.  The witch dangled from a branch and cried for help.  She tried casting a spell to free herself but the tree held onto her tighter out of spite.  A squirrel named Fred came rushing along the branch and felt sorry for the witch.  He gnawed off the branch so the witch fell to the forest floor.  She got up and dusted herself off.  But the woodcutter, who lived nearby, had a large dog that started to bark loudly, as the dog didn''t like witches.  The Woodcutter opened his door to find out why the dog was barking and saw a bedraggled witch with her hat askew.  Normally he didn''t like witches either, but he felt sorry for the witch who looked bruised and battered.  He invited her into his hut and offered her cookies and milk.  The witch was so grateful that she gave the woodcutter a magic purse that gave him gold coins whenever he needed them.  The Woodcutter was so happy.  The Witch limped home in the morning and got a new broom.  Everyone lived happily ever after.', 3)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a Woodcutter who lived in a cottage in the woods.  He was enjoying a nice dinner when there was a loud banging on his door.  A beautiful Princess stood in his doorway crying.  The Woodcutter invited her into his cottage, and sat her down by his nice roaring fire.  ''How can I help\\?'' the Woodcutter inquired.  The Princess sobbed, ''My dog Fifi has run away!  Can you help me find her\\?'' Then there was a scratching noise at the door and a doggy whine.  The Woodcutter let in the sopping wet, rainy dog, who immediately shook herself and got water all over the Woodcutter''s nice upholstered chairs.  The Woodcutter snarled at the stupid dog, but the Princess was overjoyed and the dog leaped into her arms.  The Woodcutter smiled and decided it was time for new chairs anyway.  Everyone lived happily ever after.', 4)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a Woodcutter who lived in a small house in the forest.  He was enjoying some afternoon tea and cake when something hit the roof of his house with a loud thump.  His dog started barking and the Woodcutter went out to investigate.  He found a stunned, unconscious goblin lying by the side of his house.   The strong Woodcutter easily carried the small goblin inside and put him in a rocking chair near the fireplace.  The Woodcutter covered the goblin with blankets and began fanning the goblin with a handkerchief.  After a few minutes, the goblin opened his eyes and looked around.  He was terrified and looked like he was going to bolt, but the Woodcutter made reassuring noises.  The Woodcutter told the goblin, ''Don''t worry, you''re safe here.  What happened\\?'' The dazed goblin relaxed a bit and said, ''Well, I was up in that big tree there, looking for nuts and maybe a juicy squirrel for dinner, when something fell out of the sky and hit me, hard.  So I fell onto your roof, and here I am''.  The Woodcutter smiled and said out loud, ''Oh, don''t worry about that, it happens all the time here.'' To himself, he thought, ''Oh, must have been that stupid witch falling off her broom again.'' He went outside to investigate again and sure enough, there was the witch, smiling at him, and apologizing as she brushed herself off and got up. The witch and goblin went home as soon as they felt better.  The woodcutter finished his tea and cake. Everyone lived happily ever after.', 4)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a Woodcutter who was out cutting down trees in the forest when a thief snuck up on him.  The thief, who was mounted on horseback and whose face up to the eyes was hidden under a bandanna, said to the Woodcutter, ''Your money or your life!!'' The Woodcutter answered, ''Well, I don''t have much money, but you''re welcome to it.  You must need it more than I do, and my life is worth more to me than any money.  If I''m alive, I can get more money.  If I''m dead, I cannot.  So he tossed the thief the gold coins from his purse.  The thief took off, galloping his horse into the woods.  The Woodcutter just smiled.  The thief didn''t know that the Woodcutter had a magic purse, a gift from the Witch, which gave him gold coins whenever he needed them.  So the thief got his loot, the Woodcutter kept his life and his money, and everyone lived happily ever after.', 4)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a Fairy who loved casting spells to create beautiful shiny gossamer objects like dragonflies and spiderwebs and other indescribable stuff. The Fairy decided she needed a special steed to travel to distant lands outside of Fairyland.  So she cast an extra special spell and created an amazing giant unicorn dragonfly with translucent opalescent wings in rainbow colors. The Fairy hopped on her gorgeous giant dragonfly unicorn and flew it to the Elfin Lands, where she lived happily ever after.', 5)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was a Fairy who hated badgers.  One day she was out flitting around the woods when she encountered a badger.   She taunted the badger, whose name was Gerald.  Gerald stuck out his tongue and said, ''You may be prettier than I am but you should be nicer to creatures of the woods.  One day you might be sorry you weren''t''. The Fairy trilled her musical fairy laugh, but she didn''t despise Gerald any less, just because he spoke to her.  One day the Fairy was out flitting around when a tree branch fell on her and damaged her wing, so she couldn''t fly.  Her cries were pitiful to hear.   She lay in the soft leaves under a tree until night fell.  She was cold, hungry, thirsty and tired, but she couldn''t fly.  Gerald, who happened to be hunting for grubs in the neighborhood, heard her cries.  He was tempted to leave her there to starve since she had been so mean to him.  But Gerald was a good sort of badger.  He dragged the Fairy, who by now was nearly fainting from hunger, to his underground burrow.  He fed her some broth and put some healing salve on her wing.  He covered her with soft leaves so she could sleep comfortably.  The next day, the Fairy felt better.  She was ashamed that she''d been so nasty to Gerald, so she gave him a beautiful jewel that she carried in a small leather sac.  Gerald took the jewel and turned into a Fairy Prince.  The Fairy married Gerald and they lived happily ever after.', 5)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was an Ogre who loved chocolate, animal crackers, and peanuts.  He was also fond of children, ponies, and kittens. He was a gentle soul, but since he was big and scary looking, people (especially children) were afraid of him. Then one day the Ogre rescued a terrified kitten from a Witch that had captured it.  The Ogre found a cave and made a bed from soft blankets there.  The kitten purred and was happy, warm, and safe.  The Ogre had found a friend, so he was happy too.  Everyone lived happily ever after.', 6)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Once upon a time there was an Ogre who befriended a fish.  He would go to the brook and have long conversations with the fish every day.  They talked about everything under the sun--philosophy, alchemy, and how to grow certain types of plants.  The Ogre became very fond of the fish, whose name was Wilbert.  One day, a bear tried to catch Wilbert but Wilbert got away.  Then a hermit who lived in the forest came out with his fishing rod, and hooked Wilbert on his line.  Wilbert thought, ''Now I''m done for'', but the Ogre happened by to have his daily chat with Wilbert.  When the Ogre didn''t see the fish in their usual meeting spot, he hurried up and down the stream looking for him.  Spotting the hermit with his fishing pole, the Ogre growled at him menacingly until the hermit threw Wilbert back into the stream and ran away.  The Ogre was happy his friend was unharmed.  Wilbert was happy to be alive and swimming around in his stream.  The hermit resigned himself to a fishless dinner of nice fresh bread and cheese.  Everyone lived happily ever after.', 6)");
  await knex.raw("INSERT INTO happy_story (happy_story, char_id) VALUES ('Hello, I''m Fabia and I''d love to tell you a story.  Please see my About Page to learn more about me.', 7)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time there was a talking bear that loved to eat berries and fish.  One day he was out catching fish and rooting around for berries when he encountered the woodcutter.  The woodcutter was hungry and he thought Ah!  Fresh bear meat for dinner! He strung his bow and got ready to kill the bear. But the bear had other ideas.  He did not care to be dinner for anyone. The bear cried ''Go away and leave me alone...rooooaarr!!!'' He turned and lashed out at his persecutor. The bear''s pursuer turned and shot an arrow into the bear. The bear did not die right away, but he roared in pain and struck out at the human with his claws.  The human died on the spot.  No one lived happily ever after.', 1)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time there was a vicious Bear. One day the Prince was out hunting with his dog and the Bear growled at the Prince''s dog. The dog snarled at the mean Bear, who lashed out at it.  The dog, who was a wimp, limped away whining.  The Bear had given the dog a small scratch on its leg.  The Prince shot an arrow at the Bear, but he missed. Everyone was annoyed.  No one lived happily ever after.', 1)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time, there was a very stupid and selfish Princess.  She spent all day looking in the mirror since she was so pretty.  But when she went out into the village and saw hungry and crippled children begging in the streets, she laughed at them and told them to go home and get some cookies to eat.  Since the kids had nothing to eat, they didn''t much like the Princess''s comment.  The people raided the Princess''s castle and cast her out.  When she was in rags begging on the street for food, they taunted her and kicked her.  The sad Princess realized, too late, how cruel she had been to the begging children.   No one lived happily ever after.', 2)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time, there was a Princess who was in love with a Bear.  The Bear had long red hair and so did the Princess. One day the Bear met a beautiful girl bear in a lavender dress and matching cape. He fell in love with her.  The Bear forgot about the Princess and married the female bear.  The bears lived happily ever after. The Princess was very, very sad and lonely.  She cried herself to sleep.', 2)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time there was a very nasty Witch who ate puppies, kittens, and children as snacks. Two children and their dog came calling on the Witch.  She tried to put them all in her oven.  But the children pushed the Witch into the oven and ran away.  The kids lived happily ever after, but that was the end of that wicked Witch and her house burned down too.', 3)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time there was a mean ugly Witch who went around the village scaring everyone by saying whatever would frighten them the most.  She knew this lady named Mabel was terrified of spiders, so she frightened Mabel half to death by threatening to cover her bed with spiders.  There was a little girl named Gertie who was horrified of snakes, so the mean witch said she would put snakes down Gertie''s dress.  No one liked the Witch.  Then one day someone figured out that the Witch herself had a secret fear.  She was really afraid of mice.  The boy who found this out was called Roger.  Roger snuck into the Witch''s smelly old hut and filled it with mice he''d caught in the woods and then stuffed into his pockets.  The Witch ran screaming out of town.  The Witch did not live happily ever after, but the villagers were very happy to be rid of her.', 3)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time there was a Woodcutter who lived in a cottage in the woods.  He was enjoying a nice dinner when there was a loud banging on his door. He opened the door and there stood and Ogre holding a troll upside down by the heels.  The troll was squirming and shouting, ''Hey, you dumb Woodcutter, are you going to help me or are you going to just stand there and stare\\?'' The Woodcutter got mad and slammed the door.  He heard a lot of snarling and screaming and scratching outside the door and in the morning he found a dead Ogre and a passed out troll lying in a heap on his doorstep.  No one lived happily ever after, except maybe the Woodcutter.', 4)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time there was a Woodcutter who was out chopping down trees when he encountered a one-eyed Giant.  The Giant roared and tossed the Woodcutter into a nearby tree.  The Woodcutter chopped off the Giant''s head from the tree.  There was a lot of blood and it was pretty gross.  The Woodcutter was too tired and injured to get out of the tree, so he had to stay there.  No one lived happily ever after.', 4)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time there was a Fairy who loved an elf.  The elf mostly ignored her as he was kind of stuck on himself and mostly ignored everyone else. The Fairy started pining away as she was really crazy about the elf who barely noticed her.  She lost weight, didn''t eat, and became listless and pale (well, paler, she was pale to begin with). The elf went away to war and never even said anything to the Fairy.  The Fairy was never the same again.  She lost her joy.  No one lived happily ever after, including the elf, who was shot by an arrow.', 5)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time there was a beautiful Fairy who tormented this Prince who loved her.  He''d bring her flowers, and she would laugh at him.  The Prince grew very sad and became quite ill.  He took to his bed and nearly died.  The King, the Prince''s father, was so angry at the Fairy that he had her cast out of his kingdom.  The Fairy wandered the woods forever without finding a home.  No one lived happily ever after.', 5)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time there was a mean Ogre who went around bashing people against large rocks.  People were afraid of the Ogre and would run and hide when the Ogre approached.  A donkey started braying and the Ogre couldn''t stand the sound so he grabbed the donkey to dash its head against stones. But the Woodcutter heard the poor donkey braying and he went to chop the Ogre''s head off with his ax.  But before he could do it, the Ogre tossed him and the donkey into the river.  They swam to safety fortunately, but the Ogre was still around to terrorize people.  No one lived happily ever after.', 6)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Once upon a time there was a very nasty large Ogre who bullied everyone who was smaller than him.  He picked on dogs, children, people, everyone really.  Then one day a Giant came along and ate the Ogre for lunch.  The Ogre did not live happily ever after, although the people were glad he was gone, as no one liked him. ', 6)");
  await knex.raw("INSERT INTO sad_story (sad_story, char_id) VALUES('Hello, I''m Fabia and I''d love to tell you a story. Please see my About Page to learn more about me.', 7)");
};
