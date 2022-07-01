/* boton enviar ubicado en el form */ 

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip().
    document.getElementById("Enviar").onclick = function () {
        alert("tu mensaje fue enviado");
    }
});

 

  /* boton seccion "quienes somos" */ 
  function myFunction1() {
    var x = document.getElementById("t1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

function myFunction2() {
    var x = document.getElementById("t2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};


function myFunction3() {
    var x = document.getElementById("t3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};
