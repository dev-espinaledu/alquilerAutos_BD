const bcrypt = require('bcrypt');
const { Cliente } = require('../models');

 //login
exports.loginCliente = async(req, res)=>{
  const {correo, password}= req.body;
  try{
    const cliente = await Cliente.findOne({ where: {correo} });
    console.log(cliente)
    if (!cliente ){
      return res.status(404).json({mensaje:"Cliente no encontrado"})
    }
    const passwordValido = await bcrypt.compare(password, cliente.password);

    if (!passwordValido){
      return res.status(401).json({mensaje:"Contraseña incorrecta"})
    }
    res.status(200).json({mensaje: "Inicio de sesión exitoso", cliente});
  } catch(error){
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({mensaje:"Error al iniciar sesion", error:error.message})
  }
};
  ////////////////////////////
exports.registrarCliente = async (req, res) => {
  try {
    const { nombre, correo, numLic, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // 10 es el número de salt rounds
    const nuevoCliente = await Cliente.create({ nombre, correo, numLic, password: hashedPassword });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error("Error al crear el cliente:", error);
    res.status(500).json({ mensaje: "Error al crear el cliente", error: error.message });
  }
};

exports.verclientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error("Error al obtener los clientes:", error);
    res.status(500).json({ mensaje: "Error al obtener los clientes", error: error.message });
  }
};