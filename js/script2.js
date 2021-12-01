
item = document.querySelector("#adiciona")
btn = document.querySelector(".unidade")
btn.addEventListener("click", function (event) {

    localStorage.setItem("estoque_atual", parseInt(item.value))

})

