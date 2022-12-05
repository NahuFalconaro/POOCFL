let botonesEliminar = document.getElementsByClassName('btnEliminar');
console.log(botones);

function capturarEvento(){
  for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", borrar)
  }
}

function borrar(id){
  console.log('borrar', id);
}

capturarEvento()
