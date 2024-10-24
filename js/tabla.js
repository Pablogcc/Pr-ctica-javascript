

// Estos son los datos de la lista de usuarios
const datosCampos = [
   // { nombre: 'pablo', apellidos: 'garcía', telefono: '123456789', email: 'pablo@gmail.com', sexo: 'masculino' },
    { nombre: 'amanda', apellidos: 'rodríguez', telefono: '298347566', email: 'pablo@gmail.com', sexo: 'femenino' },
    { nombre: 'matías', apellidos: 'fernández', telefono: '102938475', email: 'carlos@gmail.com', sexo: 'masculino' },
    { nombre: 'pabolo', apellidos: 'fernández', telefono: '102938456', email: 'pabolo@gmail.com', sexo: 'masculino' }
    
];

// Rellenamos los datos de de datosCampo en lista de usuarios
function cargarDatos() {
    //con esto hacemos que los usuarios ser rellenen en la tabla
    const tabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];

    datosCampos.forEach(usuario => {
        // Aquí creamos las filas para cada usuario con sus campos
        const fila = document.createElement('tr');  
        
        // Creamos y añadimos las celdas para cada propiedad del usuario
        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = usuario.nombre;
        fila.appendChild(celdaNombre);

        const celdaApellidos = document.createElement('td');
        celdaApellidos.textContent = usuario.apellidos;
        fila.appendChild(celdaApellidos);

        const celdaTelefono = document.createElement('td');
        celdaTelefono.textContent = usuario.telefono;
        fila.appendChild(celdaTelefono);

        const celdaEmail = document.createElement('td');
        celdaEmail.textContent = usuario.email;
        fila.appendChild(celdaEmail);

        const celdaSexo = document.createElement('td');
        celdaSexo.textContent = usuario.sexo;
        fila.appendChild(celdaSexo);

        // Creamos y añadimos el botón de eliminar
        const celdaAccion = document.createElement('td');
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        botonEliminar.classList.add('eliminar');
        celdaAccion.appendChild(botonEliminar);
        fila.appendChild(celdaAccion);

        // Añadimos la fila a la tabla
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