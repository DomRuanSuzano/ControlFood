/*document.addEventListener("DOMContentLoaded",function(){

if (parseInt(localStorage.getItem('estoque_atual')) != NaN){
    localStorage.setItem('estoque_atual',('48 unid.'))
}


alterado = document.querySelector('#alterar')
alterado.innerHTML = parseInt(localStorage.getItem('estoque_atual')) + parseInt(localStorage.getItem('adicionar')) + ' unid.'
localStorage.setItem('estoque_atual',String(parseInt()))
})*/

localStorage.setItem("estoque_atual", parseInt(item.value))

alterado = document.querySelector("#alterado")

if (localStorage.getItem("estoque_atual") != NaN) {

    alterado.innerHTML = localStorage.getItem("estoque_atual") + " und."

}