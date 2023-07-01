const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")
const btn = document.querySelector("#btn")
const msg = document.querySelector(".msg")
const p = document.querySelector(".p-msg")
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    //verifica se o nome está vazio

    if(nameInput.value ==''){
        
       function popUp(){
        msg.classList.toggle("hide")
        p.innerText="Digite um nome válido"
       }


       function removePopUp(){
        msg.classList.toggle("hide")
       }


       popUp();

       setTimeout(() => {
            removePopUp()
       },3000)


    }else if(emailInput.value ==""){

        function popUp(){
            msg.classList.toggle("hide")
            p.innerText="Digite um Email válido"
           }
    
    
           function removePopUp(){
            msg.classList.toggle("hide")
           }
    
    
           popUp();
    
           setTimeout(() => {
                removePopUp()
           },3000)








    }else if(passwordInput.value ==""){
        
        function popUp(){
            msg.classList.toggle("hide")
            p.innerText="Digite uma senha válida"
           }
    
    
           function removePopUp(){
            msg.classList.toggle("hide")
           }
    
    
           popUp();
    
           setTimeout(() => {
                removePopUp()
           },3000)



    }else if(messageTextarea.value ==""){
       
        function popUp(){
            msg.classList.toggle("hide")
            p.innerText="Digite uma mensagem válida"
           }
    
    
           function removePopUp(){
            msg.classList.toggle("hide")
           }
    
    
           popUp();
    
           setTimeout(() => {
                removePopUp()
           },3000)





        console.log("Erro. Email vazio")

    }else{
        form.submit();
    }

})

