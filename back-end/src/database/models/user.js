module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'cliente',
    },
  }, { timestamps: false });

  User.associate = (models) => {
    User.hasMany(models.Sales, {foreignKey: 'id', as: 'user'})
  }

  return User;
};