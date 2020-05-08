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
    "I’ve been told ‘You are what you eat.’ Guess I ate a sexy beast this morning.",
    "I’m hurt but I still smile. That’s my life.",
    "I’m pawsome and currently having a purrfect day",
    "Anything but predictable",
    "I believe in making the impossible possible because there’s no fun in giving up",
    "Turned my dreams into my vision and my vision into my reality",
    "Don’t know what to do? You can start by hitting that follow button.",
    "I’m on my journey. Join me by following along.",
    "Follow me to get a behind the scenes look at my life",
    "Sassy, classy with a touch of badassy",
    "Relationship status: Netflix and ice cream",
    "Sprinkling kindness everywhere I go",
    "Every day might not be a good day but there is good in every day",
    "Even if you had instructions, you still couldn’t handle me",
    "If I was a writer I’d have a better Peridot bio quote.",
    "Tell me not to do something and I’ll do it twice and take pictures",
    "I got to where I am today by being me"
]

# demo = User.create!(
#     username: Faker::Twitter.unique.screen_name,
#     password: "password",
#     first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#     email: "demo@gmail.com",
#     bio: bios[-1],
#     age: Faker::Number.between(from: 18, to: 35),
#     gender: Faker::Gender.binary_type.downcase,
#     language: Faker::Nation.language,
#     region: Faker::Nation.capital_city
# )

# #create users
# users = []
# 15.times do |n|
#     users << User.create!(
#         username: Faker::Twitter.unique.screen_name,
#         password: Faker::Internet.password(min_length: 6),
#         first_name: Faker::Name.first_name,
#         last_name: Faker::Name.last_name,
#         email: Faker::Internet.unique.free_email,
#         bio: bios[n],
#         age: Faker::Number.between(from: 18, to: 35),
#         gender: Faker::Gender.binary_type.downcase,
#         language: Faker::Nation.language,
#         region: Faker::Nation.capital_city
#     )
# end


demo = User.create!(
    username: "demo",
    password: "123456",
    first_name: "Demo",
    last_name: "User",
    email: "demouser@gmail.com",
    bio: bios[-1],
    age: 23,
    gender: Faker::Gender.binary_type.downcase,
    language: "english",
    region: "europe"
)

user1 = User.create!(
    username: "airiam",
    password: "123456",
    first_name: "Jonathan",
    last_name: "Archer",
    email: "ja@gmail.com",
    bio: bios[0],
    age: 28,
    gender: "male",
    language: "spanish",
    region: "europe"
)

user2 = User.create!(
    username: "sojiasha",
    password: "123456",
    first_name: "Soji",
    last_name: "Asha",
    email: "sa@gmail.com",
    bio: bios[1],
    age: 21,
    gender: "female",
    language: "spanish",
    region: "america"
)

user3 = User.create!(
    username: "reginaldB",
    password: "123456",
    first_name: "Reginald",
    last_name: "Barclay",
    email: "rb@gmail.com",
    bio: bios[2],
    age: 31,
    gender: "female",
    language: "japanese",
    region: "asia"
)

user4 = User.create!(
    username: "erickS",
    password: "123456",
    first_name: "Erick",
    last_name: "Santos",
    email: "es@gmail.com",
    bio: bios[3],
    age: 19,
    gender: "male",
    language: "english",
    region: "america"
)

user5 = User.create!(
    username: "Bareil",
    password: "123456",
    first_name: "Bareil",
    last_name: "Antos",
    email: "bareil@gmail.com",
    bio: bios[4],
    age: 29,
    gender: "male",
    language: "french",
    region: "africa"
)

user6 = User.create!(
    username: "julian",
    password: "123456",
    first_name: "Julian",
    last_name: "Bashir",
    email: "julianb@gmail.com",
    bio: bios[5],
    age: 31,
    gender: "male",
    language: "italian",
    region: "asia"
)

user7 = User.create!(
    username: "brad",
    password: "123456",
    first_name: "Brad",
    last_name: "Boimler",
    email: "brad@gmail.com",
    bio: bios[6],
    age: 34,
    gender: "male",
    language: "spanish",
    region: "south america"
)

user8 = User.create!(
    username: "borgqueen",
    password: "123456",
    first_name: "Brog",
    last_name: "Queen",
    email: "brogqueen@gmail.com",
    bio: bios[7],
    age: 27,
    gender: "female",
    language: "english",
    region: "america"
)

user9 = User.create!(
    username: "phillip",
    password: "123456",
    first_name: "Phillip",
    last_name: "Boyce",
    email: "phillip@gmail.com",
    bio: bios[8],
    age: 29,
    gender: "male",
    language: "japanese",
    region: "europe"
)

user10 = User.create!(
    username: "gabrielle",
    password: "123456",
    first_name: "Gabrielle",
    last_name: "Burnham",
    email: "gabrie@gmail.com",
    bio: bios[9],
    age: 18,
    gender: "female",
    language: "french",
    region: "australia"
)

user11 = User.create!(
    username: "michael",
    password: "123456",
    first_name: "Michael",
    last_name: "Burnham",
    email: "michaelB@gmail.com",
    bio: bios[10],
    age: 29,
    gender: "male",
    language: "english",
    region: "australia"
)
user12 = User.create!(
    username: "josephcarey",
    password: "123456",
    first_name: "Joseph",
    last_name: "Carey",
    email: "josephCarey@gmail.com",
    bio: bios[11],
    age: 25,
    gender: "male",
    language: "korean",
    region: "america"
)

user13 = User.create!(
    username: "christinechapel",
    password: "123456",
    first_name: "Christine",
    last_name: "Chapel",
    email: "ccc@gmail.com",
    bio: bios[12],
    age: 30,
    gender: "female",
    language: "russian",
    region: "africa"
)

user14 = User.create!(
    username: "pavelchekov",
    password: "123456",
    first_name: "Pavel",
    last_name: "Chekov",
    email: "pavelchekov@gmail.com",
    bio: bios[13],
    age: 20,
    gender: "male",
    language: "english",
    region: "south america"
)

user15 = User.create!(
    username: "katrinacornwell",
    password: "123456",
    first_name: "Katrina",
    last_name: "Cornwell",
    email: "kcornwell@gmail.com",
    bio: bios[14],
    age: 23,
    gender: "female",
    language: "spanish",
    region: "south america"
)

user16 = User.create!(
    username: "kimaracretak",
    password: "123456",
    first_name: "Kimara",
    last_name: "Cretak",
    email: "kimaracretak@gmail.com",
    bio: bios[15],
    age: 28,
    gender: "female",
    language: "mandarin",
    region: "europe"
)

main_seed_url = "https://peridot-seed.s3-us-west-1.amazonaws.com/"
pin_image_url = "https://unsplash.com/"

cats_names = [
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

animals_names = [
    "Animals/backpacking.jpg",
    "Animals/billiards.jpg",
    "Animals/birb.jpg",
    "Animals/boston_terrier.jpg",
    "Animals/bunny.jpg",
    "Animals/curious.jpg",
    "Animals/dog_lifted.jpg",
    "Animals/doggo_dance.jpg",
    "Animals/doggo_skyline.jpg",
    "Animals/doggo_waiting.jpg"
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
    # "Animals/pupper_leaves.jpg",
    # "Animals/rafty_boy.jpg",
    # "Animals/ride_along.jpg",
    # "Animals/roadtrip.jpg",
    # "Animals/smart_boi.jpg",
    # "Animals/smol_owl.jpg",
    # "Animals/smug_pug.jpg",
    # "Animals/snek.jpg",
    # "Animals/starbucks.jpg",
    # "Animals/sunny_doggo.jpg",
]

covid_names = [
    "Covid/carts.jpg",
    "Covid/clothes_line.jpg",
    "Covid/coffee_time.jpg",
    "Covid/computer_mask.jpg",
    "Covid/downer.jpg",
    "Covid/farm.jpg",
    "Covid/hammock.jpg",
    "Covid/happy_hour.jpg",
    "Covid/making_masks.jpg",
    "Covid/masked.jpg",
    "Covid/neon_umbrella.jpg",
    "Covid/pain.jpg",
    "Covid/park.jpg",
    "Covid/ruby_tuesday.jpg",
    "Covid/scrabble.jpg",
    "Covid/shelves.jpg",
    "Covid/stairs.jpg",
    "Covid/surfer.jpg",
    "Covid/tables.jpg",
    "Covid/texting.jpg"
]

fashion_names = [
    "Fashion/fashion_1.jpg",
    "Fashion/fashion_2.jpg",
    "Fashion/fashion_3.jpg",
    "Fashion/fashion_4.jpg",
    "Fashion/fashion_5.jpg",
    "Fashion/fashion_6.jpg",
    "Fashion/fashion_7.jpg",
    "Fashion/fashion_8.jpg",
    "Fashion/fashion_9.jpg",
    "Fashion/fashion_10.jpg"
]

food_names = [
    "Food/assortment.jpg",
    "Food/bhanmi.jpg",
    "Food/breakfast.jpg",
    "Food/burgers_and_brew.jpg",
    "Food/citrus.jpg",
    "Food/dumplings.jpg",
    "Food/egg_salad.jpg",
    "Food/garlic.jpg",
    "Food/greens.jpg",
    "Food/mc_cafe.jpg"
]

home_names = [
    "Home/home_1.jpg",
    "Home/home_2.jpg",
    "Home/home_3.jpg",
    "Home/home_4.jpg",
    "Home/home_5.jpg",
    "Home/home_6.jpg",
    "Home/home_7.jpg",
    "Home/home_8.jpg",
    "Home/home_9.jpg",
    "Home/home_10.jpg"
]

tech_names = [
    "Tech/tech_1.jpg",
    "Tech/tech_2.jpg",
    "Tech/tech_3.jpg",
    "Tech/tech_4.jpg",
    "Tech/tech_5.jpg",
    "Tech/tech_6.jpg",
    "Tech/tech_7.jpg",
    "Tech/tech_8.jpg",
    "Tech/tech_9.jpg",
    "Tech/tech_10.jpg",
    "Tech/tech_11.jpg",
    "Tech/tech_12.jpg",
    "Tech/tech_13.jpg",
    "Tech/tech_14.jpg",
    "Tech/tech_15.jpg",
    "Tech/tech_16.jpg",
    "Tech/tech_17.jpg",
    "Tech/tech_18.jpg",
    "Tech/tech_19.jpg",
    "Tech/tech_20.jpg"
]

travel_names = [
    "Travel/nature_1.jpg",
    "Travel/nature_2.jpg",
    "Travel/nature_3.jpg",
    "Travel/nature_4.jpg",
    "Travel/nature_5.jpg",
    "Travel/nature_6.jpg",
    "Travel/nature_7.jpg",
    "Travel/nature_8.jpg",
    "Travel/nature_9.jpg",
    "Travel/nature_10.jpg"
]


chosen_id = 1
board = Board.create!(
    user_id: chosen_id,
    name: "Purrrfect",
    description: "In ancient times cats were worshipped as gods; they have not forgotten this."
)

cats_names.each_with_index do |file_name, idx|
    pin = Pin.create!(
        user_id: chosen_id,
        title: Faker::Creature::Cat.name,
        description: Faker::GreekPhilosophers.quote,
        link: pin_image_url,
        category: "cats",
        photo: {
            io: open(main_seed_url + file_name),
            filename: file_name
        }
    )
    BoardPin.create!(
        board_id: board.id,
        pin_id: pin.id
    )
end

chosen_id = 1
board = Board.create!(
    user_id: chosen_id,
    name: "Animals Crossing",
    description: "The clock is always ticking, whether you're there or not."
)

animals_names.each_with_index do |file_name, idx|
    pin = Pin.create!(
        user_id: chosen_id,
        title: Faker::Creature::Cat.name,
        description: Faker::GreekPhilosophers.quote,
        link: pin_image_url,
        category: "animals",
        photo: {
            io: open(main_seed_url + file_name),
            filename: file_name
        }
    )
    BoardPin.create!(
        board_id: board.id,
        pin_id: pin.id
    )
end

chosen_id = 2
board = Board.create!(
    user_id: chosen_id,
    name: "Fashion",
    description: "You can have anything you want in life if you dress for it"
)

fashion_names.each_with_index do |file_name, idx|
    pin = Pin.create!(
        user_id: chosen_id,
        title: Faker::Book.title,
        description: Faker::GreekPhilosophers.quote,
        link: pin_image_url,
        category: "fashion",
        photo: {
            io: open(main_seed_url + file_name),
            filename: file_name
        }
    )
    BoardPin.create!(
        board_id: board.id,
        pin_id: pin.id
    )
end

chosen_id = 3
board = Board.create!(
    user_id: chosen_id,
    name: "Om nom nom",
    description: "A balanced diet is a cookie in each hand."
)

food_names.each_with_index do |file_name, idx|
    pin = Pin.create!(
        user_id: chosen_id,
        title: Faker::Book.title,
        description: Faker::GreekPhilosophers.quote,
        link: pin_image_url,
        category: "food",
        photo: {
            io: open(main_seed_url + file_name),
            filename: file_name
        }
    )
    BoardPin.create!(
        board_id: board.id,
        pin_id: pin.id
    )
end

chosen_id = 4
board = Board.create!(
    user_id: chosen_id,
    name: "Home decor",
    description: "There's no place like home"
)

home_names.each_with_index do |file_name, idx|
    pin = Pin.create!(
        user_id: chosen_id,
        title: Faker::Book.title,
        description: Faker::GreekPhilosophers.quote,
        link: pin_image_url,
        category: "home",
        photo: {
            io: open(main_seed_url + file_name),
            filename: file_name
        }
    )
    BoardPin.create!(
        board_id: board.id,
        pin_id: pin.id
    )
end

chosen_id = 5
board = Board.create!(
    user_id: chosen_id,
    name: "Tech for days",
    description: "Life is too short to remove USB safely"
)

tech_names.each_with_index do |file_name, idx|
    pin = Pin.create!(
        user_id: chosen_id,
        title: Faker::Book.title,
        description: Faker::ChuckNorris.fact,
        link: pin_image_url,
        category: "tech",
        photo: {
            io: open(main_seed_url + file_name),
            filename: file_name
        }
    )
    BoardPin.create!(
        board_id: board.id,
        pin_id: pin.id
    )
end

chosen_id = 1
board = Board.create!(
    user_id: chosen_id,
    name: "Vacation Ideas",
    description: "I need a vacation so long that I forget my passwords"
)

travel_names.each_with_index do |file_name, idx|
    pin = Pin.create!(
        user_id: chosen_id,
        title: Faker::Book.title,
        description: Faker::GreekPhilosophers.quote,
        link: pin_image_url,
        category: "travel",
        photo: {
            io: open(main_seed_url + file_name),
            filename: file_name
        }
    )
    BoardPin.create!(
        board_id: board.id,
        pin_id: pin.id
    )
end

chosen_id = 5
board = Board.create!(
    user_id: chosen_id,
    name: "Quarantine days",
    description: "Life finds a way"
)

covid_names.each_with_index do |file_name, idx|
    pin = Pin.create!(
        user_id: chosen_id,
        title: Faker::Book.title,
        description: Faker::ChuckNorris.fact,
        link: pin_image_url,
        category: "covid",
        photo: {
            io: open(main_seed_url + file_name),
            filename: file_name
        }
    )
    BoardPin.create!(
        board_id: board.id,
        pin_id: pin.id
    )
end