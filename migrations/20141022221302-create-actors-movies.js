"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("ActorsMovies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      ActorId: {
        type: DataTypes.INTEGER,
        references: "Actors",
        referencesKey: "id"
      },
      MovieId: {
        type: DataTypes.INTEGER,
        references: "Movies",
        referencesKey: "id"
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("ActorsMovies").done(done);
  }
};