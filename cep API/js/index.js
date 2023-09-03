const cepInput       = document.querySelector("#cep");
const ruaInput       = document.querySelector("#rua");
const bairroInput    = document.querySelector("#bairro");
const cidadeInput    = document.querySelector("#localidade");
const estadoInput    = document.querySelector("#uf");
const btnConsultaCep = document.querySelector("#consultaCep");

const url = "https://viacep.com.br/ws/";

async function getEndereco(){
    return await fetch(`${url}${cepInput.value}/json/`)
    .then((data) =>{
        return data.json()
    }).catch((err) =>{
        console.log(`Aconteceu o seguinte erro: ${err}`)
    })

    console.log(data)
}

btnConsultaCep.addEventListener("click", (e) =>{
    e.preventDefault()
    showEndereco();
    
})

async function showEndereco(){
     const endereco = await getEndereco();

     ruaInput.value    = endereco.logradouro
     bairroInput.value = endereco.bairro
     cidadeInput.value = endereco.localidade
     estadoInput.value = endereco.uf

}

