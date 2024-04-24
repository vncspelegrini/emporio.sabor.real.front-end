const p_texto = document.getElementById('p_texto');

function trazer() {
  let ano = document.getElementById('ano').value;
  let pais = document.getElementById('pais').value;

  const endpoint = `https://date.nager.at/api/v3/publicholidays/${ano}/${pais}`;

  fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
      console.log(dados);

      var lista = document.getElementById('repos');
      for (i in dados) {
        console.log(dados[i]);
        var elemento = document.createElement('li');
        elemento.innerHTML = JSON.stringify(dados[i].date);
        lista.appendChild(elemento);
      }

      // p_texto.innerHTML=dados
    });
}

function cadastrar() {
  let ano = document.getElementById('ano').value;
  let pais = document.getElementById('pais').value;

  const endpoint = `https://date.nager.at/api/v3/publicholidays/${ano}/${pais}`;

  fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
      console.log(dados);

      var lista = document.getElementById('repos');
      for (i in dados) {
        console.log(dados[i]);
        var elemento = document.createElement('li');
        elemento.innerHTML = JSON.stringify(dados[i].date);
        lista.appendChild(elemento);
      }

      // p_texto.innerHTML=dados
    });
}

function consultar() {
   let id = document.getElementById('id_do_produto_consultar').value;

  const endpoint = `http://localhost:8080/api/v1/estoque/id/${id}`;

  fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
      console.log(dados);

      var lista = document.getElementById('repos');
      for (i in dados) {
        console.log(dados[i]);
        var elemento = document.createElement('li');
        elemento.innerHTML = JSON.stringify(dados[i].date);
        lista.appendChild(elemento);
      }

      // p_texto.innerHTML=dados
    });
}

function consultar2() {
  
  const endpoint = `http://localhost:8080/api/v1/estoque`;

 fetch(endpoint)
   .then(res => res.json())
   .then(dados => {
     console.log(dados);

     var lista = document.getElementById('repos2');

     for (i in dados) {
       console.log(dados[i]);
       var elemento = document.createElement('li');
       elemento.innerHTML = JSON.stringify(dados[i]);
       lista.appendChild(elemento);
     
 }
     // p_texto.innerHTML=dados
   });
}

function editar() {
  let ano = document.getElementById('ano').value;
  let pais = document.getElementById('pais').value;

  const endpoint = `https://date.nager.at/api/v3/publicholidays/${ano}/${pais}`;

  fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
      console.log(dados);

      var lista = document.getElementById('repos');
      for (i in dados) {
        console.log(dados[i]);
        var elemento = document.createElement('li');
        elemento.innerHTML = JSON.stringify(dados[i].date);
        lista.appendChild(elemento);
      }

      // p_texto.innerHTML=dados
    });
}

function excluir() {
  let excluir = document.getElementById('id_do_produto_excluir').value;

  const endpoint = `https://date.nager.at/api/v3/publicholidays/${excluir}`;

  fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
      console.log(dados);

      var lista = document.getElementById('repos');
      for (i in dados) {
        console.log(dados[i]);
        var elemento = document.createElement('li');
        elemento.innerHTML = JSON.stringify(dados[i].date);
        lista.appendChild(elemento);
      }

      // p_texto.innerHTML=dados
    });
}
