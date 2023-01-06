let btnCadastrarCracha = document.querySelector(".btn__cadastrar ");

function buscarCrachaLocalStorage() {
  const crachas = JSON.parse(localStorage.getItem("@kenzieCracha:lista"));

  return crachas ? crachas : [];
}

function pegarInformacoesModal() {
  let crachas = buscarCrachaLocalStorage();
  let idCracha = 0;

  if (crachas.length) {
    idCracha = (crachas[crachas.length - 1].id + 1) * 2;
  }

  let info = {
    id: idCracha,
    imagem: `https://picsum.photos/id/${idCracha}/200/300`,
    nomeCompleto: document.getElementById("nome_completo").value,
    email: document.getElementById("email").value,
    nomeSlack: document.getElementById("nome_slack").value,
    ocupacao: document.getElementById("ocupacao").value,
  };

  return info;
}

function cadastrarCracha(informacoes) {
  const crachas = buscarCrachaLocalStorage();

  crachas.push(informacoes);

  localStorage.setItem("@kenzieCracha:lista", JSON.stringify(crachas));
  window.location.href = "/pages/lista-crachas.html";
}

btnCadastrarCracha.addEventListener("click", () => {
  cadastrarCracha(pegarInformacoesModal());
});
