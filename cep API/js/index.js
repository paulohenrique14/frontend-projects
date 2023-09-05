const cepInput       = document.querySelector("#cep");
const ruaInput       = document.querySelector("#rua");
const bairroInput    = document.querySelector("#bairro");
const cidadeInput    = document.querySelector("#localidade");
const estadoInput    = document.querySelector("#uf");
const btnConsultaCep = document.querySelector("#consultaCep");
const addressForm    = document.querySelector(".addressForm")
const lblCep         = document.querySelector("#lblCep")

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
    }else{
        verificacao();
         
    }

    console.log(valorCep.replace(/\s/g, '').length)
    
    
})

async function showEndereco(){
     const endereco = await getEndereco();

     if (endereco.logradouro !== undefined){
        ruaInput.value    = endereco.logradouro
        bairroInput.value = endereco.bairro
        cidadeInput.value = endereco.localidade
        estadoInput.value = endereco.uf
     }else{
        verificacao();
     }

     console.log(endereco.logradouro)



}

// let pesquisaCep = () =>{
//     let valorCep = cepInput.value;

//     if (valorCep.replace(/\s/g, '').length === 8){
//         showEndereco();
//     }
// }

// cepInput.addEventListener('keyup', () =>{
//     console.log('acarcado')
//     pesquisaCep();
// })

let verificacao = () => {
    lblCep.textContent = 'Favor digitar o cep corretamente'
        setTimeout(() => {
            lblCep.textContent = 'Digite o seu CEP'   
        }, 2500);

    cepInput.value = '' 
    ruaInput.value    = '';
    bairroInput.value = '';
    cidadeInput.value = '';
    estadoInput.value = '';
}
