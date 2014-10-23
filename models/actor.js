"use strict";

module.exports = function(sequelize, DataTypes) {
  var Actor = sequelize.define("Actor", {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Actor.hasMany(models.Movie);
      }
    }
  });

  return Actor;
};
