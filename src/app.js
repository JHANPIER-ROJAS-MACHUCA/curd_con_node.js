require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

const proveedorRoutes = require('./routes/proveedorRoutes');

// Middleware para JSON
app.use(express.json());

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas API
app.use('/api', proveedorRoutes);

// Puerto dinámico para Render
const PORT = process.env.PORT || 3127;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});