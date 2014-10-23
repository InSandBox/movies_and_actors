"use strict";

module.exports = function(sequelize, DataTypes) {
  var ActorsMovies = sequelize.define("ActorsMovies", {
    ActorId: DataTypes.STRING,
    MovieId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return ActorsMovies;
};
