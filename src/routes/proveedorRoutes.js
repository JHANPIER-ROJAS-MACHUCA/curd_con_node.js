const express = require('express');
const router = express.Router();

const proveedorController = require('../controllers/proveedorController');

router.get('/proveedores', proveedorController.obtenerProveedores);
router.post('/proveedores', proveedorController.crearProveedor);
router.put('/proveedores/:id', proveedorController.actualizarProveedor);
router.delete('/proveedores/:id', proveedorController.eliminarProveedor);

module.exports = router;