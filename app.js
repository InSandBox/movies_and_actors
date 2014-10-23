var db = require("./models/index");

var lebowski = "The Big Lebowski";
var barton = "Barton Fink";
var magnolia = "Magnolia";

var john = "John Goodman";
var steve = "Steve Buscemi";
var jeff = "Jeff Bridges";
var phil = "Philip Seymour Hoffman";
var julianne = "Julianne Moore";

// =========================================
// Uncomment these to add Actors and Movies.
// =========================================
//
// db.Movie.create({title: lebowski});
// db.Movie.create({title: barton});
// db.Movie.create({title: magnolia});

// db.Actor.create({name: john});
// db.Actor.create({name: steve});
// db.Actor.create({name: jeff});
// db.Actor.create({name: phil});
// db.Actor.create({name: julianne});


// =======================================
// Uncomment these to create associations.
// =======================================
//
// db.Movie.find({where: {title: lebowski}}).done(function (err, bigL) {
//   db.Actor.findAll().done(function (err, allActors) {
//     bigL.setActors(allActors);
//   });
// });
// db.Movie.find({where: {title: barton}}).done(function (err, fink) {
//   db.Actor.findAll({where: {name: [john, steve]}}).done(function (err, guys) {
//     fink.setActors(guys);
//   });
// });
// db.Movie.find({where: {title: magnolia}}).done(function (err, movie) {
//   db.Actor.findAll({where: {name: [phil, julianne]}}).done(function (err, folks) {
//     movie.setActors(folks);
//   });
// });


// ========================================================
// Uncomment these to see which Actors are in which Movies.
// ========================================================
// var printCast = function (movie, cast) {
//     console.log(movie.title + " has the following actors:");
//     cast.forEach(function (actor) {
//       console.log(" - " + actor.name);
//     });
// };
// db.Movie.find({where: {title: lebowski}}).done(function (err, bigL) {
//   bigL.getActors().done(function (err, cast) {
//     printCast(bigL, cast);
//   });
// });
// db.Movie.find({where: {title: barton}}).done(function (err, fink) {
//   fink.getActors().done(function (err, cast) {
//     printCast(fink, cast);
//   });
// });
// db.Movie.find({where: {title: magnolia}}).done(function (err, movie) {
//   movie.getActors().done(function (err, cast) {
//     printCast(movie, cast);
//   });
// });


// ===========================================
// Uncomment this to try deleting John Goodman
// ===========================================
// db.Actor.find({name: john}).done(function (err, goodman) {
//   goodman.destroy().done(function (err) {
//     if (err) {
//       console.log("error deleting " + john, err);
//     } else {
//       console.log("i deleted " + john);
//     }
//   });
// });

// ================================================
// Uncomment these to remove all Actors and Movies.
// ================================================
// db.Movie.destroy();
// db.Actor.destroy();

// ================================================
// Uncomment these to remove all ActorsMovies.
// ================================================
// db.ActorsMovies.destroy();
