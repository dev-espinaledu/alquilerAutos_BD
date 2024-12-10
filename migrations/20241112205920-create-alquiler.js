// migration: create-alquiler.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alquileres', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cliente_id: {
        type: Sequelize.INTEGER, // Asegúrate de que sea INTEGER si el `id` de `clientes` es INTEGER
        allowNull: true,
        references: {
          model: 'Clientes',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      auto_id: {
        type: Sequelize.INTEGER, // Asegúrate de que sea INTEGER si el `id` de `autos` es INTEGER
        allowNull: true,
        references: {
          model: 'Autos',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      fechaInicio: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      fechaFin: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('alquileres');
  },
};