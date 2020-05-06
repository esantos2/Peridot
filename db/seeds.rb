# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Pin.destroy_all
Board.destroy_all
BoardPin.destroy_all

bios = [
    "The best things come from living outside of your comfort zone.",
    "A day in the life of me: Eat avocado toast, post videos, read comments.",
    "Currently saying yes to new adventures",
    "I’m hurt but I still smile. That’s my life.",
    "I’ve been told ‘You are what you eat.’ Guess I ate a sexy beast this morning.",
    "I’m pawsome and currently having a purrfect day",
    "Anything but predictable",
    "I believe in making the impossible possible because there’s no fun in giving up",
    "Turned my dreams into my vision and my vision into my reality",
    "If I was a writer I’d have a better Peridot bio quote.",
    "I got to where I am today by being me",
    "Don’t know what to do? You can start by hitting that follow button.",
    "I’m on my journey. Join me by following along.",
    "Follow me to get a behind the scenes look at my life",
    "Sassy, classy with a touch of badassy",
    "Relationship status: Netflix and ice cream",
    "Sprinkling kindness everywhere I go",
    "Every day might not be a good day but there is good in every day",
    "Even if you had instructions, you still couldn’t handle me",
    "Tell me not to do something and I’ll do it twice and take pictures"
]

demo = User.create!(
    username: Faker::Twitter.unique.screen_name,
    password: "password",
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: "demo@gmail.com",
    bio: bios[n],
    age: Faker::Number.between(from: 18, to: 35),
    gender: Faker::Gender.binary_type.downcase,
    language: Faker::Nation.language,
    region: Faker::Nation.capital_city
)

#create users
users = []
15.times do |n|
    users << User.create!(
        username: Faker::Twitter.unique.screen_name,
        password: Faker::Internet.password(min_length: 6),
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.unique.free_email,
        bio: bios[n],
        age: Faker::Number.between(from: 18, to: 35),
        gender: Faker::Gender.binary_type.downcase,
        language: Faker::Nation.language,
        region: Faker::Nation.capital_city
    )
end

main_seed_url = "https://peridot-seed.s3-us-west-1.amazonaws.com/"
pin_image_url = "https://unsplash.com/"

cats_file_names = [
    "Cats/april.jpg",
    "Cats/basket.jpg",
    "Cats/books.jpg",
    "Cats/butterfly.jpg",
    "Cats/cat_stare.jpg",
    "Cats/chair.jpg",
    "Cats/coffee.jpg",
    "Cats/cool_cat.jpg",
    "Cats/couch_kitten.jpg",
    "Cats/crib.jpg",
    "Cats/faucet.jpg",
    "Cats/flowers.jpg",
    "Cats/go_cat_go.jpg",
    "Cats/green_cat.jpg",
    "Cats/hold.jpg",
    "Cats/holding_cat.jpg",
    "Cats/holiday.jpg",
    "Cats/homie.jpg",
    "Cats/jump.jpg",
    "Cats/kiss.jpg",
    "Cats/kitten.jpg",
    "Cats/night.jpg",
    "Cats/petpet.jpg",
    "Cats/rice.jpg",
    "Cats/scarlet_cat.jpg",
    "Cats/selfie.jpg",
    "Cats/sheets.jpg",
    "Cats/sleepy_couch.jpg",
    "Cats/sleepy_pet.jpg",
    "Cats/staredown.jpg",
    "Cats/tired_cat.jpg",
    "Cats/white_cat.jpg",
    "Cats/window.jpg",
    "Cats/xmas.jpg"
]

animals_file_names = [
    "Animals/backpacking.jpg",
    "Animals/billiards.jpg",
    "Animals/birb.jpg",
    "Animals/boston_terrier.jpg",
    "Animals/bunny.jpg",
    "Animals/curious.jpg",
    "Animals/dog_lifted.jpg",
    "Animals/doggo_dance.jpg",
    "Animals/doggo_skyline.jpg",
    "Animals/doggo_waiting.jpg",
    "Animals/doggo_yawn.jpg",
    "Animals/english_bulldog.jpg",
    "Animals/froggo.jpg",
    "Animals/holding_doggo.jpg",
    "Animals/lemur.jpg",
    "Animals/owl.jpg",
    "Animals/pesky_bird.jpg",
    "Animals/piglets.jpg",
    "Animals/porkchop.jpg",
    "Animals/pug_flowers.jpg",
    "Animals/pupper_leaves.jpg",
    "Animals/rafty_boy.jpg",
    "Animals/ride_along.jpg",
    "Animals/roadtrip.jpg",
    "Animals/smart_boi.jpg",
    "Animals/smol_owl.jpg",
    "Animals/smug_pug.jpg",
    "Animals/snek.jpg",
    "Animals/starbucks.jpg",
    "Animals/sunny_doggo.jpg",
]


#create boards and pins
pins = []

#first two users have cat, animal boards
board = Board.create!(
    user_id: users[0].id,
    name: "Cats",
    description: ""
)
board = Board.create!(
    user_id: users[1].id,
    name: "Cats",
    description: ""
)

half = cats_file_names.length / 2
cats_file_names.each_with_index do |file_name, idx|
    #create pin
    chosen_id = idx < half ? 1 : 2
    pin = Pin.create!(
        user_id: chosen_id,
        title: Faker::Creature::Cat.name,
        description: Faker::GreekPhilosophers.quote,
        link: pin_image_url,
        category: "cats"
    )
    
    #add photo to pin
    pic = open(main_seed_url + file_name)
    pin.photo.attach(
        io: pic,
        filename: file_name
    )

    #add BoardPin
    BoardPin.create!(
        board_id: chosen_id,
        pin_id: pin.id
    )
end



board = Board.create!(
    user_id: users[0].id,
    name: "Animals",
    description: ""
)
board = Board.create!(
    user_id: users[1].id,
    name: "Animals",
    description: ""
)
half = animals_file_names.length / 2
animals_file_names.each_with_index do |file_name, idx|
    #create pin
    chosen_id = idx < half ? 1 : 2
    pin = Pin.create!(
        user_id: chosen_id,
        title: Faker::Book.unique.title,
        description: Faker::GreekPhilosophers.quote,
        link: pin_image_url,
        category: "animals"
    )
    
    #add photo to pin
    pic = open(main_seed_url + file_name)
    pin.photo.attach(
        io: pic,
        filename: file_name
    )

    #add BoardPin
    BoardPin.create!(
        board_id: chosen_id + 2,
        pin_id: pin.id
    )
end


#create boards for each user
#place random pins on each board






# User.create!(
#     email: "batBoy@yahoo.com", 
#     password: "password",
#     age: "35",
#     username: "dark_knight", 
#     gender: "male",
#     language: "English",
#     region: "USA",
#     first_name: "Bruce", 
#     last_name: "Wayne", 
#     bio: "I'm rich.")

# User.create!(
#     email: "qween@io", 
#     password: "password",
#     age: "28",
#     username: "woman_of_wonder", 
#     gender: "female",
#     language: "English",
#     region: "Themyscira",
#     first_name: "Diana", 
#     last_name: "Prince", 
#     bio: "Fighting doesn't make you a hero")

# Pin.create!(
#     user_id: 1,
#     title: "Nighthawks",
#     description: "Chillin like a villain",
#     link: "www.wheresMyFoodTho.com"
# )

# Pin.create!(
#     user_id: 1,
#     title: "Starry Night",
#     description: "Have you ever seen such a beautiful site",
#     link: "www.ohWhatANight.org"
# )

# Pin.create!(
#     user_id: 3,
#     title: "Girl with a Pear Earring",
#     description: "I could almost kiss the stars for shining so bright",
#     link: "www.oldSchoolCool.com"
# )

# Pin.create!(
#     user_id: 3,
#     title: "The Birth of Venus",
#     description: "Aphrodite rising from the seafoam",
#     link: "www.whyYouDoThis.com"
# )

# Pin.create!(
#     user_id: 2,
#     title: "American Gothic",
#     description: "Take me home, country road",
#     link: "www.neverForgetMerlin.com"
# )

# Pin.create!(
#     user_id: 1,
#     title: "The Last Supper",
#     description: "Pre-quarantine chilling with the boys",
#     link: "www.whereYouGoinJudas.com"
# )

# Pin.create!(
#     user_id: 2,
#     title: "The Great Wave of Kanagawa",
#     description: "Surf's up bruh",
#     link: "www.waterYouWaitingFor.com"
# )

# Pin.create!(
#     user_id: 2,
#     title: "Starry Night Over the Rhone",
#     description: "Longing, Homecoming, Benign",
#     link: "www.aintGotTimeForThis.com"
# )

# Pin.create!(
#     user_id: 3,
#     title: "Almond Blossoms",
#     description: "It's not weird to talk to trees",
#     link: "www.happyLilSomething.com"
# )

# Pin.create!(
#     user_id: 1,
#     title: "Olympia",
#     description: "Is it a mountain?",
#     link: "www.whereWeDroppin.com"
# )

# Pin.create!(
#     user_id: 1,
#     title: "The Yellow House",
#     description: "It used to be white",
#     link: "www.whatGoesAroundComesAround.com"
# )

# Board.create!(
#     user_id: 1,
#     name: "Art stuff",
#     description: "Sent from my iphone",
#     date_start: "2001-02-03T12:00:00+00:00",
#     date_end: "2001-02-03T12:00:00+00:00"
# )

# Board.create!(
#     user_id: 3,
#     name: "More pics",
#     description: "Sent from my iphone",
#     date_start: "2003-02-03T12:00:00+00:00",
#     date_end: "2004-02-03T12:00:00+00:00"
# )

# Board.create!(
#     user_id: 3,
#     name: "Random pics",
#     description: "Sent from my iphone",
#     date_start: "2003-02-03T12:00:00+00:00",
#     date_end: "2004-02-03T12:00:00+00:00"
# )

# Board.create!(
#     user_id: 3,
#     name: "Even more pics",
#     description: "Sent from my iphone",
#     date_start: "2003-02-03T12:00:00+00:00",
#     date_end: "2004-02-03T12:00:00+00:00"
# )

# Board.create!(
#     user_id: 3,
#     name: "Other pics",
#     description: "Sent from my iphone",
#     date_start: "2003-02-03T12:00:00+00:00",
#     date_end: "2004-02-03T12:00:00+00:00"
# )

# Board.create!(
#     user_id: 1,
#     name: "Cool pics",
#     description: "Sent from my iphone",
#     date_start: "2003-02-03T12:00:00+00:00",
#     date_end: "2004-02-03T12:00:00+00:00"
# )

# Board.create!(
#     user_id: 2,
#     name: "Stuff from my iphone",
#     description: "Sent from my iphone",
#     date_start: "2003-02-03T12:00:00+00:00",
#     date_end: "2004-02-03T12:00:00+00:00"
# )

# Board.create!(
#     user_id: 1,
#     name: "Farm pics",
#     description: "Sent from my iphone",
#     date_start: "2003-02-03T12:00:00+00:00",
#     date_end: "2004-02-03T12:00:00+00:00"
# )

# Board.create!(
#     user_id: 3,
#     name: "Cool beans",
#     description: "Sent from my iphone",
#     date_start: "2003-02-03T12:00:00+00:00",
#     date_end: "2004-02-03T12:00:00+00:00"
# )

# BoardPin.create!(
#     board_id: 3,
#     pin_id: 3
# )

# BoardPin.create!(
#     board_id: 2,
#     pin_id: 9
# )

# BoardPin.create!(
#     board_id: 2,
#     pin_id: 1
# )

# BoardPin.create!(
#     board_id: 2,
#     pin_id: 2
# )

# BoardPin.create!(
#     board_id: 2,
#     pin_id: 7
# )

# BoardPin.create!(
#     board_id: 3,
#     pin_id: 1
# )

# BoardPin.create!(
#     board_id: 1,
#     pin_id: 4
# )

# BoardPin.create!(
#     board_id: 1,
#     pin_id: 2
# )

# BoardPin.create!(
#     board_id: 2,
#     pin_id: 3
# )