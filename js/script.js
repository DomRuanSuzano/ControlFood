document.addEventListener('DOMContentLoaded', function() { 

 
    enviar=document.querySelector("#adiciona") 
    enviar.addEventListener("click",function(event){
        main=document.querySelector('main')
        secao=document.createElement('section')
        secao.classList.add("msg-resposta")
        div=document.createElement('div')
        div.classList.add("msg-titulo-invertida")
        h2=document.createElement('h2')
        h2.innerHTML="Dom Ruan"
        conteudo= document.querySelector('.entrada-msg').value
        div2=document.createElement("div")
        div2.classList.add("bolha-resposta")
        p=document.createElement('p')
        p.innerHTML=conteudo
        main.appendChild(secao)
        secao.appendChild(div)
        div.appendChild(h2)
        secao.appendChild(div2)
        div2.appendChild(p)
        console.log(conteudo)
        conteudo=document.querySelector('.entrada-msg')
        conteudo.value = ''
   }) 

}); 
