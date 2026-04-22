require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

const proveedorRoutes = require('./routes/proveedorRoutes');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Ruta raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api', proveedorRoutes);

const PORT = process.env.PORT || 3127;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});