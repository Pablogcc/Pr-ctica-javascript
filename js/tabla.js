

// Estos son los datos de la lista de usuarios
const datosCampos = [
    { nombre: 'pablo', apellidos: 'garcía', telefono: '123456789', email: 'pablo@gmail.com', sexo: 'masculino' },
    { nombre: 'amanda', apellidos: 'rodríguez', telefono: '298347566', email: 'pablo@gmail.com', sexo: 'femenino' },
    { nombre: 'matías', apellidos: 'fernández', telefono: '102938475', email: 'carlos@gmail.com', sexo: 'masculino' }
    
];

// Rellenamos los datos de de datosCampo en lista de usuarios
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
//Esto sirve para eliminar las filas
    document.getElementById('tabla').addEventListener('click', function(event) {
        if (event.target.classList.contains('eliminar')) {
            event.target.closest('tr').remove(); 
        }
    });


    const filtro = document.getElementById('filtrar');
//Aquí creamos el input cuando escribimos
filtro.addEventListener('input', function () {
    const texto = filtro.value.toLowerCase(); 
    //Seleccionamos todo menos la primera fila, la cabecera 
    const filas = document.querySelectorAll('#tabla tbody tr'); 

    filas.forEach(function (fila) {
        const nombre = fila.cells[0].textContent.toLowerCase(); 
        const apellidos = fila.cells[1].textContent.toLowerCase(); 

        // Aquí se hace que si hay menos de tres letras, se siguen mostrando todas las filas
        if (texto.length < 3) {
            fila.style.display = ''; 
        } else if (nombre.includes(texto) || apellidos.includes(texto)) {
            fila.style.display = ''; 
        } else {
            fila.style.display = 'none'; 
        }
    });
});
        
});