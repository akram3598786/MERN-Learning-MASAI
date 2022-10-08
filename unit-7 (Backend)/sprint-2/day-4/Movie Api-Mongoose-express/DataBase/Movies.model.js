const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({ // Class
    title: String,
    director: String,
    release: String,
    image: String,
    flop: Boolean,
    year: Number,
});

const movieModel = mongoose.model('Movie', MovieSchema, 'movies');

module.exports = movieModel;