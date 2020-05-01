# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
    email: "notSoSuper@gmail.com", 
    password: "password",
    age: "33",
    username: "man_of_steel", 
    gender: "male",
    language: "English",
    region: "USA",
    first_name: "Clark", 
    last_name: "Kent", 
    bio: "Just a simple farmer, nothing to see here.")

User.create!(
    email: "batBoy@yahoo.com", 
    password: "password",
    age: "35",
    username: "dark_knight", 
    gender: "male",
    language: "English",
    region: "USA",
    first_name: "Bruce", 
    last_name: "Wayne", 
    bio: "I'm rich.")

User.create!(
    email: "qween@io", 
    password: "password",
    age: "28",
    username: "woman_of_wonder", 
    gender: "female",
    language: "English",
    region: "Themyscira",
    first_name: "Diana", 
    last_name: "Prince", 
    bio: "Fighting doesn't make you a hero")

Pin.create!(
    user_id: 1,
    title: "Nighthawks",
    description: "Chillin like a villain",
    link: "www.wheresMyFoodTho.com"
)

Pin.create!(
    user_id: 1,
    title: "Starry Night",
    description: "Have you ever seen such a beautiful site",
    link: "www.ohWhatANight.org"
)

Pin.create!(
    user_id: 3,
    title: "Girl with a Pear Earring",
    description: "I could almost kiss the stars for shining so bright",
    link: "www.oldSchoolCool.com"
)

Pin.create!(
    user_id: 3,
    title: "The Birth of Venus",
    description: "Aphrodite rising from the seafoam",
    link: "www.whyYouDoThis.com"
)

Pin.create!(
    user_id: 2,
    title: "American Gothic",
    description: "Take me home, country road",
    link: "www.neverForgetMerlin.com"
)

Pin.create!(
    user_id: 1,
    title: "The Last Supper",
    description: "Pre-quarantine chilling with the boys",
    link: "www.whereYouGoinJudas.com"
)

Pin.create!(
    user_id: 2,
    title: "The Great Wave of Kanagawa",
    description: "Surf's up bruh",
    link: "www.waterYouWaitingFor.com"
)

Pin.create!(
    user_id: 2,
    title: "Starry Night Over the Rhone",
    description: "Longing, Homecoming, Benign",
    link: "www.aintGotTimeForThis.com"
)

Pin.create!(
    user_id: 3,
    title: "Almond Blossoms",
    description: "It's not weird to talk to trees",
    link: "www.happyLilSomething.com"
)

Pin.create!(
    user_id: 1,
    title: "Olympia",
    description: "Is it a mountain?",
    link: "www.whereWeDroppin.com"
)

Pin.create!(
    user_id: 1,
    title: "The Yellow House",
    description: "It used to be white",
    link: "www.whatGoesAroundComesAround.com"
)

Board.create!(
    user_id: 1,
    name: "Art stuff",
    description: "Sent from my iphone",
    date_start: "2001-02-03T12:00:00+00:00",
    date_end: "2001-02-03T12:00:00+00:00"
)

Board.create!(
    user_id: 3,
    name: "More pics",
    description: "Sent from my iphone",
    date_start: "2003-02-03T12:00:00+00:00",
    date_end: "2004-02-03T12:00:00+00:00"
)