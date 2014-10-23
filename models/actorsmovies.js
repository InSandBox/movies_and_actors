"use strict";

module.exports = function(sequelize, DataTypes) {
  var ActorsMovies = sequelize.define("ActorsMovies", {
    ActorId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return ActorsMovies;
};
