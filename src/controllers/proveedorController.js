const db = require('../config/db');

// LISTAR
exports.obtenerProveedores = (req, res) => {
    db.query('SELECT * FROM proveedor', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// CREAR
exports.crearProveedor = (req, res) => {
    const { razonsocial, direccion, telefono } = req.body;

    const sql = 'INSERT INTO proveedor (razonsocial, direccion, telefono) VALUES (?, ?, ?)';

    db.query(sql, [razonsocial, direccion, telefono], (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({
            mensaje: 'Proveedor registrado',
            id_proveedor: result.insertId
        });
    });
};

// ACTUALIZAR
exports.actualizarProveedor = (req, res) => {
    const { id } = req.params;
    const { razonsocial, direccion, telefono } = req.body;

    const sql = 'UPDATE proveedor SET razonsocial=?, direccion=?, telefono=? WHERE id_proveedor=?';

    db.query(sql, [razonsocial, direccion, telefono, id], (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({ mensaje: 'Proveedor actualizado' });
    });
};

// ELIMINAR
exports.eliminarProveedor = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM proveedor WHERE id_proveedor=?', [id], (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({ mensaje: 'Proveedor eliminado' });
    });
};