An in-class exercise to demonstrate how to setup a many-to-many
relationship between Movies and Actors.

Here's a log of the steps I took:

- npm init
- npm install --save express pg sequelize sequelize-cli
- add node_modules/ to .gitignore
- sqlize init
- modify config.json to use postgres
- sqlize model:create --name Actor --attributes name:string
- sqlize model:create --name Movie --attributes title:string
- createdb movies_and_actors_dev
- sqlize db:migrate
- Actor.hasMany(models.Movie)
- Movie.hasMany(models.Actor)
- Possibly unhandled SequelizeDatabaseError: error: relation "ActorsMovies" does not exist
- sqlize model:create --name ActorsMovies --attributes ActorId:string,MovieId:string
- sqlize db:migrate

// Oops, I realized I made a mistake. ActorId and MovieId should have
// been integers, not strings. Now I'm going to reset the database,
// modify my ActorsMovies migration and model files, and then rerun
// all the migrations.

- sqlize db:migrate:undo // undo all the migrations
- movies_and_actors_dev=# DROP TABLE "SequelizeMeta"; // overcome bug in sequelize
- change DataTypes.STRING to DataTypes.INTEGER for ActorId and MovieId
  in actors-movies migration file.
- change DataTypes.STRING to DataTypes.INTEGER for ActorId and MovieId
  in actorsmovies.js model file.
- sqlize db:migrate // redo all the migrations

// Things seems to work now.  I am able to create Actors and Movies
// and associate them in a many-to-many relationship.
//
// However, I notice that I am able to delete an Actor which will
// leave ophaned entries in the ActorsMovies table.  Foreign key
// contraints are supposed to help us here.  We never labeled anything
// as a foreign key, so let's fix that.

- sqlize db:migrate:undo
- movies_and_actors_dev=# DROP TABLE "SequelizeMeta";
- in actors-movies migration file:
    - ActorId references "Actors" and referencesKey "id"
    - MovieId references "Movies" and referencesKey "id"
- sqlist db:migrate
