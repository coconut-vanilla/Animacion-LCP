(function () {
  // Variables
  var lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea = document.getElementById("btn-agregar");
  btnCompronarStr = document.getElementById("btn-evaluar");
  let words = []

  // Funciones
  var agregarTarea = function () {
    var tarea = tareaInput.value
    words.push(tareaInput.value)
    if (lista.children.length <= 3) {
      nuevaTarea = document.createElement("li"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea);
    }
    else {
      alert("Has alcanzado el numero de cadenas maximo");
    }
    if (tarea === "") {
      tareaInput.setAttribute("placeholder", "Agrega un String Valido");
      tareaInput.className = "error";
      return false;
    }
    //Funcion Cad
    // Agregamos el contenido al enlace
    enlace.appendChild(contenido);
    // Le establecemos un atributo href
    enlace.setAttribute("href", "#");
    // Agrergamos el enlace (a) a la nueva tarea (li)
    nuevaTarea.appendChild(enlace);
    // Agregamos la nueva tarea a la lista
    lista.appendChild(nuevaTarea);

    tareaInput.value = "";

    for (var i = 0; i <= lista.children.length - 1; i++) {
      lista.children[i].addEventListener("click", function () {
        this.parentNode.removeChild(this);
      });
    }

  };
  var comprobarStr = function () {
    let prefix = '';

    if (words.length === 0) document.getElementById("texto").innerHTML = prefix;

    for (let i = 0; i < words[0].length; i++) {
      const character = words[0][i];
      for (let j = 0; j < words.length; j++) {
        if (words[j][i] !== character) document.getElementById("texto").innerHTML = prefix;
      }
      prefix = prefix + character;
    }
    document.getElementById("texto").innerHTML = prefix;
  };

  var comprobarInput = function () {
    tareaInput.className = "";
    teareaInput.setAttribute("placeholder", "Agrega tu tarea");
  };

  var eleminarTarea = function () {
    this.parentNode.removeChild(this);
  };

  // Eventos
  btnCompronarStr.addEventListener("click", comprobarStr)
  // Agregar Tarea
  btnNuevaTarea.addEventListener("click", agregarTarea);

  // Comprobar Input
  tareaInput.addEventListener("click", comprobarInput);

  // Borrando Elementos de la lista
  for (var i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener("click", eleminarTarea);
  }
}());

//var longestCommonPrefix = function (strs) {
function Cad() {

  let prefix = '';

  if (strs.length === 0) return prefix;

  for (let i = 0; i < strs[0].length; i++) {
    const character = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== character) return prefix;
    }
    prefix = prefix + character;
  }
  return prefix;
}



