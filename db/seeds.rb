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
   points: 100)
 ac.cards.create(
   question: 'What school is the class apart of?', 
   answer: 'Kunugigaoka Junior High School', 
   points: 200)
 ac.cards.create(
   question: 'How many weaknesses does Koro-Sensei have in total?', 
   answer: '39', 
   points: 300)
 ac.cards.create(
   question: "Koro-Sensei's face turns ____ when he is furious, but for educational purposes only.", 
   answer: 'Gunmetal Grey', 
   points: 400)

 #Demon slayer cards
 ds.cards.create(
   question: "Who is Nezuko's brother?", 
   answer: 'Tanjiro', 
   points: 100)
  ds.cards.create(
   question: "___ wears a boar mask.", 
   answer: 'Inosuke', 
   points: 200)
  ds.cards.create(
    question: 'You must pass ___ days of the test to become a member for the Demon Slayer Corps.', 
    answer: '7', 
    points: 300)
 ds.cards.create(
   question: "What color was Zenitsu's hair before it turned yellow?", 
   answer: 'Black', 
   points: 400)
 

#Re:Zero (best anime of all time) cards
 rz.cards.create(
  question: "What is the main protagonist's name?", 
  answer: 'Subaru', 
  points: 100)
rz.cards.create(
  question: 'Subaru has the power to ___.', 
  answer: 'Return by Death', 
  points: 200)
rz.cards.create(
  question: "What is the name of the spirit that Emilia is contracted to?", 
  answer: 'Puck', 
  points: 300)
rz.cards.create(
  question: "___ is the caretaker of the library.", 
  answer: 'Beatrice', 
  points: 400)

#Tokyo ghoul cards
tg.cards.create(
  question: "Ghouls cannot eat human food as it tastes bland and makes them sick...apart from one thing. What is that?", 
  answer: 'Coffee', 
  points: 100)
tg.cards.create(
  question: 'Kaneki met Rize Kamishiro at ___.', 
  answer: 'Anteiku', 
  points: 200)
tg.cards.create(
  question: "___ is the codename given to Kaneki.", 
  answer: 'Eye-Patch', 
  points: 300)
tg.cards.create(
  question: "Who tortured Kaneki to the point of insanity?", 
  answer: 'Jason', 
  points: 400)
puts 'DB seeded'