function noExiste(){
    alert('Esta seccion que quiere bucar no existe.')
}

function obtenerData(){
    let texto = document.getElementById('texto').value;
    let nombre = document.getElementById('nombre');

    nombre.innerHTML = texto; 
}