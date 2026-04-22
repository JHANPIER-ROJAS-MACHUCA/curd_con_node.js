const API = '/api/proveedores';

const form = document.getElementById('formProveedor');
const tabla = document.getElementById('tablaProveedores');

// LISTAR
async function listarProveedores() {
    const res = await fetch(API);
    const data = await res.json();

    tabla.innerHTML = '';

    data.forEach(proveedor => {
        tabla.innerHTML += `
            <tr>
                <td>${proveedor.id_proveedor}</td>
                <td>${proveedor.razonsocial}</td>
                <td>${proveedor.direccion}</td>
                <td>${proveedor.telefono}</td>
                <td>
                    <button onclick="editarProveedor(${proveedor.id_proveedor}, '${proveedor.razonsocial}', '${proveedor.direccion}', '${proveedor.telefono}')">Editar</button>
                    <button onclick="eliminarProveedor(${proveedor.id_proveedor})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

// GUARDAR
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('id_proveedor').value;

    const proveedor = {
        razonsocial: document.getElementById('razonsocial').value,
        direccion: document.getElementById('direccion').value,
        telefono: document.getElementById('telefono').value
    };

    if (id) {
        await fetch(`${API}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(proveedor)
        });
    } else {
        await fetch(API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(proveedor)
        });
    }

    form.reset();
    listarProveedores();
});

// EDITAR
function editarProveedor(id, razonsocial, direccion, telefono) {
    document.getElementById('id_proveedor').value = id;
    document.getElementById('razonsocial').value = razonsocial;
    document.getElementById('direccion').value = direccion;
    document.getElementById('telefono').value = telefono;
}

// ELIMINAR
async function eliminarProveedor(id) {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    listarProveedores();
}

listarProveedores();