module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    // Definición de atributos de Cliente
  }, {
    tableName: 'Clientes',
    timestamps: true,
  });

  Cliente.associate = function(models) {
    Cliente.hasMany(models.Alquiler, {
      foreignKey: 'cliente_id',
      as: 'alquileres',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });
  };

  return Cliente;
};