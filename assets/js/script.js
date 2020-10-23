/*
Case sensitive = reconhece a diferença entre letras maiúsculas e minúsculas.

por Tag: window.document.getElementByTagName(nome da tag)
por Id: getElementById()
por Nome: getElementsByClassName()
por Seletor: querySelector()

*/

 let nome = window.document.getElementById("nome")
 let email = document.querySelector("#email")
 let mensagem = document.querySelector("#mensagem")
 let nomeOk = falso
 let emailOk = falso
 let mensagemOk = falso
 let mapa= document.querySelector("#mapa")

 nome.style.width ="100%"
 email.style.width = "100%"
 /*telefone.style.width= "100%"*/
 mensagem.style.width= "100%"

 function validaNome(){
    let txtNome = document.querySelector(".txtNome")
    if(nome.value.length < 3){
       txtNome.innerHTML = "Nome inválido"
       txtNome.style.color = "red"
     }
     else{
         txtNome.innerHTML = "Nome válido"
         txtNome.style.color = "green"
         nomeOk = true
     }
 }

 function validaEmail(){
     let txtEmail = document.querySelector(".txtEmail")
     if(email.value.indexOf("@") == -1 || email.value.indexOf(".")==-1){ 
         txtEmail.innerHTML= "E-mail inválido"
         txtEmail.style.color = "red"
     }else{
        txtEmail.innerHTML= "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
 }

    function validaMensagem(){
        let txtMensagem = document.querySelector(".txtMensagem")  
        if(mensagem.value.length >= 100){
            txtMensagem.innerHTML="Texto muito grande. Limite de caracteres: 100."
            txtMensagem.style.color = "red"
            txtMensagem.style.display = 'block'
        } else {
           txtMensagem.style.display = 'none'
           mensagemOk = true
        }
     }

    function enviar(){
        if(nomeOk == true && emailOk == true && mensagemOk == true){
            alert("Formulário enviado com sucesso.")
        }
        else{
            alert("Preencha o formulário corretamente.")
        }
    }

    function mapaZoom(){
        mapa.style.width="800px"
        mapa.style.height="600px"
    }

    function mapaNormal(){
        mapa.style.width="400px"
        mapa.style.height = "250px"
    }