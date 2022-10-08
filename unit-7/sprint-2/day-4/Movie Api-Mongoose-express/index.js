const express = require("express");
const Router = express.Router();
const fs = require('fs');
const mongoose = require('mongoose');
const { send } = require("process");
const connectDatabbase = require("./DataBase/ConnectDatabase.js");
const movieModel = require('./DataBase/Movies.model.js')
// const SeedMovies = require("./Utilities/movies.seedMovies.js");

const app = express();
app.use(express.json());
app.use(Router);

// Create a new movie in database
const CreateMovie = async (req, res) => {
    try {
       
        let newMovie = req.body;
        let movie = await movieModel.create(newMovie);
        res.send(`${newMovie.title} Movie created`);
    } catch (err) {
        console.log(err);
    }
}

// Fetching all movies from database
const GetMovies = async (req, res) => {

    try {
       
        let { title, rating, sortBy, limit } = req.query;
        let queries = {};
        if (title === undefined && rating === undefined) {
            queries = {};
        } else if (title === undefined) {
            queries.rating = rating;
        } else if (rating === undefined) {
            queries.title = { '$regex': title, '$options': 'i' };
        } else {
            queries.rating = rating;
            queries.title = { '$regex': title, '$options': 'i' }
        }

        let sorting = {};
        if (sortBy != undefined) {
            sorting[sortBy] = 1;
        }

        let movies = await movieModel.find(queries).sort(sorting).skip((page - 1) * limit).limit(limit);
        // console.log(movies);
        res.send(movies);
    } catch (err) {
        console.log(err);
    }
}

// updaet movie in database
const UpdateMovie = async (req, res) => {

    try {
        let { id } = req.params;
        let toupdateData = req.body;
        // let selected = await movieModel.findOne({ _id: id });
        // selected.flop = !selected.flop;
        await movieModel.findByIdAndUpdate(id, toupdateData, { new: true }); // new will update daat just after command, no need to update or reset DB
        res.send(`${selected.title} Updated Successfully`)
    }
    catch (err) {
        console.log(err);
    }
}

// Delete movie in movie database
const DeleteMovie = async (req, res) => {

    try {
     
        let { id } = req.params;
        let selected = await movieModel.findOne({ _id: id });
        await movieModel.findByIdAndDelete({ _id: id })
        res.send(`${selected.title} Deleted Successfully`)
    } catch (err) {
        console.log(err);
    }

}

Router.post('/create', CreateMovie);
Router.get('/', GetMovies);
Router.patch('/:id', UpdateMovie);
Router.delete('/:id', DeleteMovie);

let port = 8080;
app.listen(port, async (req, res) => {
    await connectDatabbase();
    console.log(`Server running at ${port}`);
})
