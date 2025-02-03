# Interface de Gerenciamento de um Petshop

![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-green)  
![Tecnologias](https://img.shields.io/badge/Tecnologias-HTML%2C%20CSS%20%28SCSS%29%2C%20JavaScript-blue)  

Este projeto consiste em uma **interface de gerenciamento de um petshop**, desenvolvida como parte do **Desafio do Módulo 2** do curso de **HTML, CSS e JavaScript**. O objetivo principal foi aplicar os conhecimentos adquiridos para criar uma aplicação funcional, responsiva e com armazenamento local dos dados.

Caso queira acessá-lo, clique [aqui](https://felipecardosovargas.github.io/Desafio/).

## 🚀 Funcionalidades

### 📌 Página 1: Informações Gerais e Cadastro de Clientes
- Exibe informações do petshop (nome, descrição, logomarca).
- Formulário para cadastro de clientes:
  - **Tutor**: Nome, telefone, endereço e data do atendimento.
  - **Animal**: Nome, idade e porte.
- Salvamento dos dados no **LocalStorage**.

### 📌 Página 2: Listagem de Clientes
- Exibição dos clientes cadastrados em **cards** com:
  - Nome do animal
  - Data do atendimento
- Ao clicar no card, abre-se um **modal** com detalhes completos do cadastro.

### 📌 Página 3: E-commerce de Produtos para Animais
- Listagem de produtos em **cards** contendo:
  - Nome
  - Imagem
  - Valor
- Ao clicar no produto, ele é salvo no **LocalStorage** e exibe uma mensagem informando que foi adicionado ao carrinho.

> **Obs:** Não há necessidade de remover produtos do carrinho ou exibi-lo, apenas salvar os itens no armazenamento local.

---

## 🛠️ Tecnologias Utilizadas
- **HTML5**: Estruturação das páginas.
- **CSS3 (SCSS)**: Estilização e responsividade.
- **JavaScript (ES6)**: Lógica de funcionamento, manipulação do DOM e armazenamento no LocalStorage.

---

## 📁 Estrutura do Projeto
```
Desafio/
│
├── index.html               # Página inicial - Informações e formulário de cadastro
├── listagem.html            # Listagem de clientes cadastrados
├── produtos.html            # Loja de produtos para animais
├── assets/                  # Pasta para imagens e ícones
├── ...
│   ├── produtos/            # Pasta para imagens de produtos
├── scss/                    # Arquivos de estilização
│   ├── ...                  # Arquivos .scss (mixins, variables...)
├── css/                     # Arquivos de estilização
│   ├── main.css           # CSS compilado
├── js/                      # Arquivos de scripts
│   ├── add-to-cart.js       # Adicionar ao carrinho
│   ├── carrossel.js         # Implementação de carrossel
│   ├── commerce.js          # Produtos carregados via objeto com JavaScript
│   ├── header.js            # Hamburguer para versão mobile
│   ├── script_add.js        # Adição de clientes via form
├── README.md                # Documentação do projeto
```

---

## 🎯 Como Usar
1. **Acesse a interface** abrindo `index.html` no navegador.
2. **Cadastre um cliente** preenchendo o formulário e salvando os dados.
3. **Veja os clientes cadastrados** na página de listagem e clique nos cards para mais informações.
4. **Adicione produtos ao carrinho** na página da loja.

---

## 📌 Melhorias Futuras
- Implementação de um **controle de carrinho**.
- Função para **editar e remover clientes**.
- Melhorar **design e experiência do usuário**.
- Integração com um **banco de dados real**.

---

## 📞 Contato
Caso tenha dúvidas ou sugestões, entre em contato:

- **Nome:** Felipe Cardoso Vargas  
- **E-mail:** [felipecardosovargas1@gmail.com](mailto:felipecardosovargas1@gmail.com)  
- **GitHub:** [Felipe Cardoso Vargas](https://github.com/Felipecardosovargas/)  

---

**Desenvolvido com ❤️ por [Felipe Cardoso Vargas] como parte do Desafio do Módulo 1.** 🚀

