// Disparando eventos apenas quando a página é carregada
window.addEventListener("DOMContentLoaded", function (event) {
    
    // Pegando o nome da página para executar ações diferentes
	const path = window.location.pathname;
    const page = path.split("/").pop();

    // Usando a função loadLocal, descrita abaixo para definir os valores de qtd no inicio das interações
	if (page === "estoque.html") {
		loadLocal();
	} 
    
    else if (page === "estoque5.html") {

        // QuerySelector dos elementos
		const txt = document.querySelector("#adiciona");
		const send = document.querySelector(".unidade");
        
        // Iniciando o valor do input em 0
		txt.value = 0;

        // Evento para enviar os valores para o localStorage
		send.addEventListener("click", function (event) {

            // Guardando os valores anteriores em uma variável
			let atual = parseInt(localStorage.getItem("qtd"));
			
            // Somando os valores atuais com os do input
            atual += parseInt(txt.value);

            // Redefinindo o local storage para o valor somado
			localStorage.setItem("qtd", String(atual));

            // Definindo o valor do input para zero para evitar missclick
			txt.value = 0;
		});
	} 
    
    else {
        // Buscando a tag H2 para exibir o valor de local storage
		let alterar = document.querySelector("#alterar");

        // Mostrando o valor atual na tela
		alterar.innerHTML = localStorage.getItem("qtd") + ' unid.';
	}
});


// Função que usa o localStorage para ser executada apenas uma vez e não sobrescrever o localStorage quando re-acessada
function loadLocal() {
	if (localStorage.getItem("first") != "true") {
		localStorage.setItem("qtd", "0");
		localStorage.setItem("first", "true");
	}
}


// fim :)