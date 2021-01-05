# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.create(name: 'Assasination Classroom')
Category.create(name: 'Demon Slayer')
Category.create(name: 'Re:Zero')
Category.create(name: 'Tokyo Ghoul')

puts 'DB seeded'