module.exports = (sequelize, DataTypes) => {
  const Auto = sequelize.define('Auto', {
    // Definición de atributos de Auto
  }, {
    tableName: 'Autos',
    timestamps: true,
  });

  Auto.associate = function(models) {
    Auto.hasMany(models.Alquiler, {
      foreignKey: 'auto_id',
      as: 'alquileres',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });
  };

  return Auto;
};