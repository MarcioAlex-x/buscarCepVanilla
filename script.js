const address = document.getElementById("address");

document.getElementById("formCep").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputCep = document.getElementById("inputCep").value;
  const fetchCep = async (cep) => {
    const res = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
    const data = await res.json();

    const loading = () =>{
        
    }
    address.innerHTML = "Buscando...";

        if (data.code === "not_found") {
            address.innerHTML = data.message;
          } else {
            address.innerHTML = `${data.address}, ${data.district}, ${data.city}, ${data.state}`;
          }
  };
  fetchCep(inputCep);
});

document.getElementById('limpar').addEventListener('click',()=>{

    document.getElementById("inputCep").value = ''
    address.innerHTML = ''

})
