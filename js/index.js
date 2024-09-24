document.addEventListener('DOMContentLoaded', function() {

    const input = document.getElementById("campodetexto");
    const btn = document.getElementById("botao");

    btn.addEventListener("click", function() {
        const pokemon = input.value;
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error("Error ao realizar APT: "+response.status);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);

                const visor = document.getElementById("tela");
                visor.innerHTML = "";

                const divNome = document.createElement("div");
                divNome.classList.add("conteiner-nome");
                divNome.innerHTML = `<p>${data.name}</p>`;
                visor.appendChild(divNome);

                const divImg = document.createElement("div");
                divImg.classList.add("conteiner-imagem");
                divImg.innerHTML = `<img src="${data.sprites.other.showdown.front_default}">
                                    <img src="${data.sprites.other.showdown.front_shiny}">`;
                visor.appendChild(divImg);

                const divAltura = document.createElement("div");
                divAltura.classList.add("conteiner-altura");
                const altura = data.height*10;
                divAltura.innerHTML = `<p>${altura} cm</p>`;
                visor.appendChild(divAltura);

                const divPeso = document.createElement("div");
                divPeso.classList.add("conteiner-peso");
                const peso = data.weight/10;
                divPeso.innerHTML = `<p>${peso} kg</p>`;
                visor.appendChild(divPeso);

                for (var i = 0; i <= 6; i++) {
                const divStatus = document.createElement("div");
                divStatus.classList.add("conteiner-status");
                const sta = data.stats[i];

                divStatus.innerHTML = `<p>${sta}</p>`;
                visor.appendChild(divStatus);

                }


            })
            .catch(error => {
                console.log("Error ao ultilizar API: ",error)
            })

    });

});