

// Estos son los datos de la lista de usuarios
const datosCampos = [
    { nombre: 'pablo', apellidos: 'garcía', telefono: '123456789', email: 'pablo@gmail.com', sexo: 'masculino' },
    { nombre: 'amanda', apellidos: 'rodríguez', telefono: '298347566', email: 'pablo@gmail.com', sexo: 'femenino' },
    { nombre: 'matías', apellidos: 'fernández', telefono: '102938475', email: 'carlos@gmail.com', sexo: 'masculino' },
    { nombre: 'pabolo', apellidos: 'fernández', telefono: '102938456', email: 'pabolo@gmail.com', sexo: 'masculino' },
    { nombre: 'andrés', apellidos: 'martínez', telefono: '102938456', email: 'pabolo@gmail.com', sexo: 'femenino' }
    

    
];

// Rellenamos los datos de de datosCampo en lista de usuarios 
function cargarDatos() {
    //con esto hacemos que los usuarios ser rellenen en la tabla
    const tabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];

    datosCampos.forEach(datos => {
        // Aquí creamos las filas para cada usuario con sus campos
        const fila = document.createElement('tr');  
        


        // Crear nombre en la lista de usuraios
        // Creamos y añadimos creando un td las celdas para cada propiedad del usuario
        const elNombre = document.createElement('td');
        // Aquí te rellena los datos que tu escribes en el array
        elNombre.textContent = datos.nombre;
        // Aquí lo crea la celda en la fila correspondiente en la tabla
        fila.appendChild(elNombre);



        const losApellidos = document.createElement('td');
        losApellidos.textContent = datos.apellidos;
        fila.appendChild(losApellidos);

        const elTelefono = document.createElement('td');
        elTelefono.textContent = datos.telefono;
        fila.appendChild(elTelefono);

        const elEmail = document.createElement('td');
        elEmail.textContent = datos.email;
        fila.appendChild(elEmail);

        const  elSexo= document.createElement('td');
        elSexo.textContent = datos.sexo;
        fila.appendChild(elSexo);

        // Creamos y añadimos el botón de eliminar
        const celdaEliminar = document.createElement('td');
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        botonEliminar.classList.add('eliminar');
        // Aquí crea el botón con la "X" para que al pulsarle se elimine
        celdaEliminar.appendChild(botonEliminar);
        // Aquí crea la celda para la "X" de eliminar el ususario
        fila.appendChild(celdaEliminar);

        // Añadimos la fila de dicho usuario a la tabla
        tabla.appendChild(fila);
    });
}


// Aquí hacemos que todos los datos de "Lista de usuarios"
 cargarDatos();
 
 




// Esto va a ser para que cuando nosotros le demos a la X se elimine toda la fila del usuario
//
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
        
