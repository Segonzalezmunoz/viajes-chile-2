/* boton enviar ubicado en el form */ 


<script>
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip().
    document.getElementById("enviar").onclick = function () {
        alert("tu mensaje fue enviado");
    }
});
</script>

