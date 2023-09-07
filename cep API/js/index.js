const cepInput       = document.querySelector("#cep");
const ruaInput       = document.querySelector("#rua");
const bairroInput    = document.querySelector("#bairro");
const cidadeInput    = document.querySelector("#localidade");
const estadoInput    = document.querySelector("#uf");
const btnConsultaCep = document.querySelector("#consultaCep");
const addressForm    = document.querySelector(".addressForm")
const lblCep         = document.querySelector("#lblCep")
const btnTeste       = document.querySelector(".teste")
const aside          = document.querySelector(".aside-glass-container")

const url = "https://viacep.com.br/ws/";

async function getEndereco(){
    return await fetch(`${url}${cepInput.value}/json/`)
    .then((data) =>{
        return data.json()
    }).catch((err) =>{
        console.log(`Aconteceu o seguinte erro: ${err}`)
    })
}

btnConsultaCep.addEventListener("click", (e) =>{
    e.preventDefault()
    let valorCep = cepInput.value;
    if (valorCep.replace(/\s/g, '').length === 8) {
        showEndereco();
    }else if (valorCep.replace(/\s/g, '').length === 0){
        limpaCampo();      
    }else{
        verificacao();
         
    }  
})

async function showEndereco(){
     const endereco = await getEndereco();

     if (endereco.logradouro !== undefined){
        ruaInput.value    = endereco.logradouro;
        bairroInput.value = endereco.bairro;
        cidadeInput.value = endereco.localidade;
        estadoInput.value = endereco.uf;
        desabilitaCampo();
     }else{
        verificacao();
     }
}

let verificacao = () => {
    lblCep.textContent = 'Favor digitar o cep corretamente'
        setTimeout(() => {
            lblCep.textContent = 'Digite o seu CEP'   
        }, 2500);

    // cepInput.value    = ''; 
    // ruaInput.value    = '';
    // bairroInput.value = '';
    // cidadeInput.value = '';
    // estadoInput.value = '';
    limpaCampo();
}

let desabilitaCampo = () =>{
    if (estadoInput.value.length > 0){
        estadoInput.disabled = true;
    }   

    if (cidadeInput.value.length > 0){
        cidadeInput.disabled = true;
    }

    if (ruaInput.value.length > 0){
        ruaInput.disabled = true;
    }

    if (bairroInput.value.length > 0){
        bairroInput.disabled = true;
    }
}

let limpaCampo = () =>{
    cepInput.value    = ''; 
    ruaInput.value    = '';
    bairroInput.value = '';
    cidadeInput.value = '';
    estadoInput.value = '';
}

btnTeste.addEventListener("click", () =>{
    aside.classList.toggle('move')
})

aside.addEventListener('click', () =>{
    aside.classList.remove('move')
})


