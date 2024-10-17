
const datosCampos = [
    { nombre: 'Pablo', apellidos: 'García', telefono: '123456789', email: 'pablo@gmail.com', sexo: 'masculino' },
    { nombre: 'Amanda', apellidos: 'Rodríguez', telefono: '298347566', email: 'pablo@gmail.com', sexo: 'femenino' },
    { nombre: 'Matías', apellidos: 'Fernández', telefono: '102938475', email: 'carlos@gmail.com', sexo: 'masculino' }
    
];


function cargarDatos() {
    const tabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];

    datosCampos.forEach(usuario => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.apellidos}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.email}</td>
            <td>${usuario.sexo}</td>
            <td><button class="eliminar">X</button></td>
        `;
        tabla.appendChild(fila);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cargarDatos(); 

    document.getElementById('tabla').addEventListener('click', function(event) {
        if (event.target.classList.contains('eliminar')) {
            event.target.closest('tr').remove(); 
        }
    });
});