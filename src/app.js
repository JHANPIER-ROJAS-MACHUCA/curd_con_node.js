const express = require('express');
const path = require('path');

const app = express();

const proveedorRoutes = require('./routes/proveedorRoutes');

app.use(express.json());

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas API
app.use('/api', proveedorRoutes);

const PORT = 3127;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});