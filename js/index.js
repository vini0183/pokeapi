document.addEventListener('DOMContentLoaded', function() {

    const input = document.getElementById("campodetexto");
    const btn = document.getElementById("botao");

    btn.addEventListener("click", function() {
        const pokemon = input.value;
        console.log(pokemon);
        alert(pokemon);
    });

});