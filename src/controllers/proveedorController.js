const db = require('../config/db');

// LISTAR
exports.obtenerProveedores = async (req, res) => {
    const { data, error } = await db
        .from('proveedor')
        .select('*');

    if (error) return res.status(500).json(error);

    res.json(data);
};

// CREAR
exports.crearProveedor = async (req, res) => {
    const { razonsocial, direccion, telefono } = req.body;

    const { data, error } = await db
        .from('proveedor')
        .insert([{ razonsocial, direccion, telefono }])
        .select();

    if (error) return res.status(500).json(error);

    res.json({
        mensaje: 'Proveedor registrado',
        data
    });
};

// ACTUALIZAR
exports.actualizarProveedor = async (req, res) => {
    const { id } = req.params;
    const { razonsocial, direccion, telefono } = req.body;

    const { error } = await db
        .from('proveedor')
        .update({ razonsocial, direccion, telefono })
        .eq('id_proveedor', id);

    if (error) return res.status(500).json(error);

    res.json({ mensaje: 'Proveedor actualizado' });
};

// ELIMINAR
exports.eliminarProveedor = async (req, res) => {
    const { id } = req.params;

    const { error } = await db
        .from('proveedor')
        .delete()
        .eq('id_proveedor', id);

    if (error) return res.status(500).json(error);

    res.json({ mensaje: 'Proveedor eliminado' });
};