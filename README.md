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
