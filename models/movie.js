"use strict";

module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Movie.hasMany(models.Actor);
      }
    }
  });

  return Movie;
};
