// Salva um novo pet no localStorage
function salvarPet(event) {
  event.preventDefault();

  // Captura os dados do formulário
  const nomePet = document.getElementById("nome-pet").value.trim();
  const tipoPet = document.getElementById("tipo-pet").value.trim();
  const idadePet = document.getElementById("idade-pet").value.trim();
  const donoPet = document.getElementById("dono-pet").value.trim();
  const telefoneDono = document.getElementById("telefone-dono").value.trim();

  // Validação básica
  if (!nomePet || !tipoPet || !idadePet || !donoPet || !telefoneDono) {
      alert("Por favor, preencha todos os campos!");
      return;
  }

  // Cria um objeto com os dados
  const pet = { nome: nomePet, tipo: tipoPet, idade: idadePet, dono: donoPet, telefone: telefoneDono };

  // Recupera os pets já cadastrados ou inicializa um array vazio
  let pets = JSON.parse(localStorage.getItem("pets")) || [];

  // Adiciona o novo pet ao array e salva no localStorage
  pets.push(pet);
  localStorage.setItem("pets", JSON.stringify(pets));

  alert(`Pet "${nomePet}" cadastrado com sucesso!`);

  // Limpa o formulário e redireciona para a listagem
  document.getElementById("form-pet").reset();
  window.location.href = "listagem.html";
}

// Exibe os pets na tabela da página de listagem
function exibirPets() {
  console.log("Função exibirPets chamada!");
  const tabelaBody = document.querySelector("#tabela-pets tbody");
  let pets = JSON.parse(localStorage.getItem("pets")) || [];
  console.log("Pets no localStorage:", pets);

  // Limpa a tabela antes de adicionar os dados
  tabelaBody.innerHTML = "";

  if (pets.length === 0) {
      tabelaBody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Nenhum pet cadastrado.</td></tr>`;
      return;
  }

  // Adiciona cada pet na tabela
  pets.forEach(pet => {
      let row = tabelaBody.insertRow();
      row.insertCell().textContent = pet.nome;
      row.insertCell().textContent = pet.tipo;
      row.insertCell().textContent = pet.idade;
      row.insertCell().textContent = pet.dono;
      row.insertCell().textContent = pet.telefone;
  });
}

// Evento para carregar os dados ao iniciar a página
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("form-pet")) {
      document.getElementById("form-pet").addEventListener("submit", salvarPet);
  }

  if (document.getElementById("tabela-pets")) {
      exibirPets();
  }
});