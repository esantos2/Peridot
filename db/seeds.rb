# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
    username: "man_of_steel", 
    first_name: "Clark", 
    last_name: "Kent", 
    email: "notSoSuper@gmail.com", 
    bio: "Just a simple farmer, nothing to see here.", 
    location: "Smallville")

User.create(
    username: "dark_knight", 
    first_name: "Bruce", 
    last_name: "Wayne", 
    email: "batBoy@yahoo.com", 
    bio: "I'm rich.", 
    location: "Gotham City")

User.create(
    username: "worldOfWonder", 
    first_name: "Diana", 
    last_name: "Prince", 
    email: "qween.io", 
    bio: "Fighting doesn't make you a hero", 
    location: "Themyscira")

    