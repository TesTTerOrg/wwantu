const Favoritos = (sequelize, S) => {
  const F = sequelize.define(
    "fav",
    {
      idfavmovie: {
        type: S.STRING,
        allowNull: false,
      },
      favmovie: {
        type: S.JSON,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return F;
};

module.exports = Favoritos;
