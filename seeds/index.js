const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers'); 
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/camp-mitra');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=> {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async() =>{
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '66917be661aa45784e5b0f2a',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nam sunt quod? Quisquam rerum amet dolor quidem, qui labore voluptatibus nulla facilis iste officia et dicta fugit dolorum enim cumque!',
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/dgyy1aiqz/image/upload/v1720954493/CampingMitra/htlh6xtsum1t1d8x2hrh.png',
                    filename: 'CampingMitra/ifegw2kbvlqlthqrcv1v'
                },
                {
                    url: 'https://res.cloudinary.com/dgyy1aiqz/image/upload/v1720954493/CampingMitra/htlh6xtsum1t1d8x2hrh.png',
                    filename: 'CampingMitra/ifegw2kbvlqlthqrcv1v'
                }
            ]
        })
        await camp.save();
    }
}

seedDB();
