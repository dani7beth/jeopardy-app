# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

 ac = Category.create(name: 'Assasination Classroom')
 ds = Category.create(name: 'Demon Slayer')
 rz = Category.create(name: 'Re:Zero')
 tg = Category.create(name: 'Tokyo Ghoul')

 #creating questions for category assasination classroom
 ac.cards.create(
   question: "The yellow, tentacle monster teacher's name is ___.", 
   answer: 'Koro-Sensei', 
   points: 100,
   questiontype: 'fill',
   dummyanswers: [],)
 ac.cards.create(
   question: 'What school is the class apart of?', 
   answer: 'Kunugigaoka Junior High School', 
   points: 200,
   questiontype: 'multi',
   dummyanswers: ['Saotume Academy', 'Fumizuki Academy', 'Assassination High', 'Kunugigaoka Junior High School'],)
 ac.cards.create(
   question: 'How many weaknesses does Koro-Sensei have in total?', 
   answer: '39', 
   points: 300,
   questiontype: 'multi',
   dummyanswers: ['100', '1', '24', '39'],)
 ac.cards.create(
   question: "Koro-Sensei's face turns ____ when he is furious, but for educational purposes only.", 
   answer: 'Gunmetal Grey', 
   points: 400,
   questiontype: 'fill',
   dummyanswers: [],)

 #Demon slayer cards
 ds.cards.create(
   question: "Who is Nezuko's brother?", 
   answer: 'Tanjiro', 
   points: 100,
   questiontype: 'multi',
   dummyanswers: ['Zenitsu', 'Inosuke', 'Ubuyashiki', 'Tanjiro'],)
  ds.cards.create(
   question: "___ wears a boar mask.", 
   answer: 'Inosuke', 
   points: 200,
   questiontype: 'fill',
   dummyanswers: [],)
  ds.cards.create(
    question: 'You must pass ___ days of the test to become a member for the Demon Slayer Corps.', 
    answer: '7', 
    points: 300,
    questiontype: 'fill',
    dummyanswers: [],)
 ds.cards.create(
   question: "What color was Zenitsu's hair before it turned yellow?", 
   answer: 'Black', 
   points: 400,
   questiontype: 'multi',
   dummyanswers: ['Black', 'Pink', 'Blue', "Brown"],)
 

#Re:Zero (best anime of all time) cards
 rz.cards.create(
  question: "What is the main protagonist's name?", 
  answer: 'Subaru', 
  points: 100,
  questiontype: 'multi',
  dummyanswers: ['Subaru', 'Beatrice', 'Emilia', 'Rem'],)
rz.cards.create(
  question: 'Subaru has the power to ___.', 
  answer: 'Return by Death', 
  points: 200,
  questiontype: 'fill',
  dummyanswers: [],)
rz.cards.create(
  question: "What is the name of the spirit that Emilia is contracted to?", 
  answer: 'Puck', 
  points: 300,
  questiontype: 'multi',
  dummyanswers: ['Puck', 'Echidna', 'Ferris', 'Roswaal'],)
rz.cards.create(
  question: "___ is the caretaker of the library.", 
  answer: 'Beatrice', 
  points: 400,
  questiontype: 'fill',
  dummyanswers: [],)

#Tokyo ghoul cards
tg.cards.create(
  question: "Ghouls cannot eat human food as it tastes bland and makes them sick...apart from one thing. What is that?", 
  answer: 'Coffee', 
  points: 100,
  questiontype: 'multi',
  dummyanswers: ['Coffee', 'Cake', 'Tea', 'Fruit'],)
tg.cards.create(
  question: 'Kaneki met Rize Kamishiro at ___.', 
  answer: 'Anteiku', 
  points: 200,
  questiontype: 'fill',
  dummyanswers: [],)
tg.cards.create(
  question: "___ is the codename given to Kaneki.", 
  answer: 'Eye-Patch', 
  points: 300,
  questiontype: 'fill',
  dummyanswers: ['Eye-Patch', 'The Rabbit', 'The Non-Killing Owl', 'The Raven'],)
tg.cards.create(
  question: "Who tortured Kaneki to the point of insanity?", 
  answer: 'Yamori', 
  points: 400,
  questiontype: 'multi',
  dummyanswers: ['Yamori', 'Yoshimura', 'Touka Kirishima', 'Hideyoshi Nagachika'],)
puts 'DB seeded'