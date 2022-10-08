const fs = require("fs");
const connectDatabbase = require("../DataBase/ConnectDatabase");
const movieModel = require("../DataBase/Movies.model");


let ToInsertMovies = [];
const SeedMovies = (req, res) => {
    fs.readFile("moviesData.json", { encoding: 'utf-8' }, (err, Mdata) => {
        if (err) console.log(err)

        ToInsertMovies = JSON.parse(Mdata);
        ToInsertMovies = ToInsertMovies.Movies;
         test();
        res.send("Data Got")
    })
}


// Movies inserted in once

async function test() {
    await connectDatabbase();
  let readyMovies =[];
       
      for(let i=0;i<=15;i++){
        let obj = {
            title : ToInsertMovies[i].Title,
            director : ToInsertMovies[i].Director,
            release : ToInsertMovies[i].Released,
            image : ToInsertMovies[i].Poster,
            flop : false,
            year : parseInt(ToInsertMovies[i].Year)
         }
          readyMovies.push(obj);
      }

    await movieModel.insertMany(readyMovies);
        
    //  await movieModel.deleteOne({title: "Dhoom"});
    let movies = await movieModel.find();
    console.log(movies);
}
 


module.exports = SeedMovies;