module.exports = (sequelize, DataTypes) => {
  const Alquiler = sequelize.define('Alquiler', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cliente_id: {
      type: DataTypes.STRING(24),
      allowNull: false,
    },
    auto_id: {
      type: DataTypes.STRING(24),
      allowNull: false,
    },
    fechaInicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fechaFin: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    tableName: 'Alquileres',
    timestamps: true,
  });

  // Definición de relaciones
  Alquiler.associate = function(models) {
    Alquiler.belongsTo(models.Cliente, {
      foreignKey: 'cliente_id',
      as: 'cliente',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });

    Alquiler.belongsTo(models.Auto, {
      foreignKey: 'auto_id',
      as: 'auto',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });
  };

  return Alquiler;
};