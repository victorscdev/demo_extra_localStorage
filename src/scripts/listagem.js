function renderizarCrachas() {
  const listaDeCrachas = buscarCrachasLocalStorage();
  const listaDeDestino = document.querySelector(".badges__list");

  listaDeDestino.innerHTML = "";

  if (listaDeCrachas.length) {
    listaDeCrachas.forEach((cracha) => {
      const cardCracha = criarCardCracha(cracha);

      listaDeDestino.append(cardCracha);
    });
  } else {
    renderizarCrachaVazio(listaDeDestino);
  }
}

function buscarCrachasLocalStorage() {
  const crachas = JSON.parse(localStorage.getItem("@kenzieCracha:lista"));

  return crachas ? crachas : [];
}

function criarEstruturaCracha() {
  const li = document.createElement("li");
  li.classList.add("badge__informations");

  const imagem = document.createElement("img");
  imagem.classList.add("badge__informations--image");

  const grupoDeInformacoes = document.createElement("div");
  grupoDeInformacoes.classList.add("badge__informations--group");

  const nomeCompleto = document.createElement("p");
  nomeCompleto.classList.add("badge__informations--fullname");

  const email = document.createElement("p");
  email.classList.add("badge__informations--fullname");

  const slack = document.createElement("p");
  slack.classList.add("badge__informations--slack");

  const ocupacao = document.createElement("p");
  ocupacao.classList.add("badge__informations--occupation");

  const botaoRemover = document.createElement("button");
  botaoRemover.classList.add("badge__informations--remove");

  const iconeRemover = document.createElement("img");
  iconeRemover.src = "../src/assets/images/trash-icon-white.svg";
  iconeRemover.alt = "Remover crachá";
  iconeRemover.title = "Remover crachá";

  return {
    li: li,
    grupoDeInformacoes: grupoDeInformacoes,
    nomeCompleto: nomeCompleto,
    email: email,
    slack: slack,
    ocupacao: ocupacao,
    botaoRemover: botaoRemover,
    iconeRemover: iconeRemover,
    imagem: imagem,
  };
}

function criarCardCracha(cracha) {
  const {
    li,
    grupoDeInformacoes,
    nomeCompleto,
    email,
    slack,
    ocupacao,
    botaoRemover,
    iconeRemover,
    imagem,
  } = criarEstruturaCracha();

  imagem.src = cracha.imagem;
  imagem.alt = cracha.nomeCompleto;
  imagem.title = cracha.nomeCompleto;
  nomeCompleto.innerText = cracha.nomeCompleto;
  email.innerText = cracha.email;
  slack.innerText = cracha.nomeSlack;
  ocupacao.innerText = cracha.ocupacao;

  botaoRemover.addEventListener("click", function (e) {
    e.preventDefault();

    removerCracha(cracha);
  });

  botaoRemover.append(iconeRemover);

  grupoDeInformacoes.append(nomeCompleto, email, slack, ocupacao, botaoRemover);

  li.append(imagem, grupoDeInformacoes);

  return li;
}

function renderizarCrachaVazio(listaDeDestino) {
  listaDeDestino.innerHTML = `
    <li>
      <h3>Você não possui crachás cadastrados.</h3>
    </li>
  `;
}

function removerCracha(cracha) {
  const listaDeCrachas = buscarCrachasLocalStorage();

  const crachasFiltrados = listaDeCrachas.filter(function (crachaAtual) {
    return crachaAtual.id != cracha.id;
  });

  localStorage.setItem("@kenzieCracha:lista", JSON.stringify(crachasFiltrados));

  renderizarCrachas();
}

renderizarCrachas();
