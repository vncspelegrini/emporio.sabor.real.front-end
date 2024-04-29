

// Cadastrar 

function cadastrar() {
 // Obtém os valores dos campos de entrada
 const produto = document.getElementById('produto').value;
 const quantidade = document.getElementById('quantidade').value;
 const validade = document.getElementById('validade').value;
 const categoria = document.getElementById('categoria').value;
 const dataCompra = document.getElementById('data_compra').value;
 const precoCompra = document.getElementById('preco_compra').value;
 const precoVenda = document.getElementById('preco_venda').value;
 const fornecedor = document.getElementById('fornecedor').value;
 const descricao = document.getElementById('descricao').value;

 // Objeto com os dados a serem enviados
 const data = {
   produto,
   quantidade,
   validade,
   categoria,
   dataCompra,
   precoCompra,
   precoVenda,
   fornecedor,
   descricao
 };

 // URL do endpoint
 const endpoint = 'http://localhost:8080/api/v1/estoque';

// Envia a requisição para o endpoint
fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao cadastrar produto');
    }
    console.log('Produto cadastrado com sucesso');
    // Faça algo após o cadastro bem-sucedido, se necessário
  })
  .catch(error => {
    console.error('Erro ao cadastrar produto:', error);
    // Trate o erro, exiba uma mensagem de erro para o usuário, etc.
  });
}





//Consultar por ID

function consultar() {
  let id = document.getElementById('id_do_produto_consultar').value;

  const endpoint = `http://localhost:8080/api/v1/estoque/id/${id}`;

  fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
      console.log(dados);

      const container = document.getElementById('dados-produto');
      container.innerHTML = `
      <h2>${dados.produto}</h2>
      <p><strong>Quantidade:</strong> ${dados.quantidade}</p>
      <p><strong>Validade:</strong> ${dados.validade}</p>
      <p><strong>Categoria:</strong> ${dados.categoria}</p>
      <p><strong>Data de Compra:</strong> ${dados.dataCompra}</p>
      <p><strong>Preço de Compra:</strong> ${dados.precoCompra}</p>
      <p><strong>Preço de Venda:</strong> ${dados.precoVenda}</p>
      <p><strong>Fornecedor:</strong> ${dados.fornecedor}</p>
      <p><strong>Descrição:</strong> ${
        dados.descricao ? dados.descricao : 'Nenhuma descrição disponível'
      }</p>
      <p><strong>Produto Disponível:</strong> ${
        dados.produtoDisponivel ? 'Sim' : 'Não'
      }</p>
    `;

    });
}






//Consultar por Nome

function consultar3() {
  let produto = document.getElementById('id_do_produto_consultar3').value;

  const endpoint = `http://localhost:8080/api/v1/estoque/produto/${produto}`;

  fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
      // Verifica se os dados são um array
      if (Array.isArray(dados)) {
        // Se for um array, retorna o primeiro elemento (supondo que apenas um objeto é retornado)
        dados = dados[0]
      };
      
      console.log(dados);

      const container = document.getElementById('dados-produto3');
      container.innerHTML = `
      <h2>${dados.produto}</h2>
      <p><strong>Quantidade:</strong> ${dados.quantidade}</p>
      <p><strong>Validade:</strong> ${dados.validade}</p>
      <p><strong>Categoria:</strong> ${dados.categoria}</p>
      <p><strong>Data de Compra:</strong> ${dados.dataCompra}</p>
      <p><strong>Preço de Compra:</strong> ${dados.precoCompra}</p>
      <p><strong>Preço de Venda:</strong> ${dados.precoVenda}</p>
      <p><strong>Fornecedor:</strong> ${dados.fornecedor}</p>
      <p><strong>Descrição:</strong> ${
        dados.descricao ? dados.descricao : 'Nenhuma descrição disponível'
      }</p>
      <p><strong>Produto Disponível:</strong> ${
        dados.produtoDisponivel ? 'Sim' : 'Não'
      }</p>
    `;

    });
}






// Consultar por Categoria

// Função para criar a estrutura HTML para cada produto
function criarEstruturaProduto4(dados) {
  return `
  <tr>
  <td>${dados.produto}</td>
  <td>${dados.quantidade}</td>
  <td>${dados.validade}</td>
  <td>${dados.categoria}</td>
  <td>${dados.dataCompra}</td>
  <td>${dados.precoCompra}</td>
  <td>${dados.precoVenda}</td>
  <td>${dados.fornecedor}</td>
  <td>${dados.descricao ? dados.descricao : 'Nenhuma descrição disponível'}</td>
  <td>${dados.produtoDisponivel ? 'Sim' : 'Não'}</td>
</tr>
  `;
}

function consultar4() {
  let categoria = document.getElementById('id_do_produto_consultar4').value;

  const endpoint = `http://localhost:8080/api/v1/estoque/categoria/${categoria}`;

  fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
      console.log(dados);
      // Não é necessário verificar se os dados são um array

      const container = document.getElementById('dados-produtos4');
      const tabela = `
        <table border="1">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Validade</th>
              <th>Categoria</th>
              <th>Data de Compra</th>
              <th>Preço de Compra</th>
              <th>Preço de Venda</th>
              <th>Fornecedor</th>
              <th>Descrição</th>
              <th>Disponível</th>
            </tr>
          </thead>
          <tbody>
            ${dados.map(criarEstruturaProduto4).join('')}
          </tbody>
        </table>
      `;
      container.innerHTML = tabela;
    });
}




// Consultar Todos os Produtos

// Função para criar a estrutura HTML para cada produto
function criarEstruturaProduto(dados) {
  return `
  <tr>
  <td>${dados.produto}</td>
  <td>${dados.quantidade}</td>
  <td>${dados.validade}</td>
  <td>${dados.categoria}</td>
  <td>${dados.dataCompra}</td>
  <td>${dados.precoCompra}</td>
  <td>${dados.precoVenda}</td>
  <td>${dados.fornecedor}</td>
  <td>${dados.descricao ? dados.descricao : 'Nenhuma descrição disponível'}</td>
  <td>${dados.produtoDisponivel ? 'Sim' : 'Não'}</td>
</tr>
  `;
}


function consultar2() {
  const endpoint = `http://localhost:8080/api/v1/estoque`;

  fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
      console.log(dados);

      const container = document.getElementById('dados-produtos2');
      // dados.forEach(produto => {
      //   const estruturaProduto = criarEstruturaProduto(produto);
      //   container.innerHTML += estruturaProduto;
      // });

      const tabela = `
    <table border="1">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Validade</th>
          <th>Categoria</th>
          <th>Data de Compra</th>
          <th>Preço de Compra</th>
          <th>Preço de Venda</th>
          <th>Fornecedor</th>
          <th>Descrição</th>
          <th>Disponível</th>
        </tr>
      </thead>
      <tbody>
        ${dados.map(criarEstruturaProduto).join('')}
      </tbody>
    </table>
  `;
  container.innerHTML = tabela;

    });
}








// Editar por ID

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


// Editar por ID - Outra forma de fazer

function atualizarEstoque(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obtém os valores dos campos de entrada
  const produto = document.getElementById('produto').value;
  const quantidade = document.getElementById('quantidade').value;
  const validade = document.getElementById('validade').value;
  const categoria = document.getElementById('categoria').value;
  const dataCompra = document.getElementById('data_compra').value;
  const precoCompra = document.getElementById('preco_compra').value;
  const precoVenda = document.getElementById('preco_venda').value;
  const fornecedor = document.getElementById('fornecedor').value;
  const descricao = document.getElementById('descricao').value;

  // Objeto com os dados a serem enviados
  const data = {
    produto,
    quantidade,
    validade,
    categoria,
    dataCompra,
    precoCompra,
    precoVenda,
    fornecedor,
    descricao
  };

  let id = document.getElementById('produto').value; 

  // URL do endpoint para atualizar o estoque
  const endpoint = `http://localhost:8080/api/v1/estoque/${id}`;

  // Envia a requisição PATCH para o endpoint
  fetch(endpoint, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao atualizar estoque');
      }
      console.log('Estoque atualizado com sucesso');
      // Faça algo após a atualização do estoque bem-sucedida, se necessário
    })
    .catch(error => {
      console.error('Erro ao atualizar estoque:', error);
      // Trate o erro, exiba uma mensagem de erro para o usuário, etc.
    });
}

// Adiciona um event listener para o evento submit do formulário
document.getElementById('form_atualizar').addEventListener('submit', atualizarEstoque);











// Excluir por ID

function excluir() {
  let id = document.getElementById('id_do_produto_excluir').value;

  const endpoint = `http://localhost:8080/api/v1/estoque/${id}`;

  fetch(endpoint, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao excluir recurso');
    }
   // return response.json();
  })
  .then(data => {
    console.log('Recurso excluído com sucesso:', data);
    // Faça algo após a exclusão bem-sucedida, se necessário
  })
  .catch(error => {
    console.error('Erro ao excluir recurso:', error);
    // Trate o erro, exiba uma mensagem de erro para o usuário, etc.
  });
}
