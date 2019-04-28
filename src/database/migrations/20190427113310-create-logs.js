module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('Logs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    request: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    response: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    method: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    start_date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    end_date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }),

  down: queryInterface => queryInterface.dropTable('Logs'),
}
