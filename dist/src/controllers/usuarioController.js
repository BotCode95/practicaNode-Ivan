"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    try {
        res.status(200).json({ mensaje: 'Hola Mundo de nuevo' });
    }
    catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};
exports.getUsuarios = getUsuarios;
const createUsuario = (req, res) => {
    const { nombre, apellido, edad } = req.body;
    try {
        //guardar en una  base de datos
        res.status(201).json({ mensaje: 'Se creo correctamente el usuario', usuario: { nombre, apellido, edad } });
    }
    catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};
exports.createUsuario = createUsuario;
//# sourceMappingURL=usuarioController.js.map