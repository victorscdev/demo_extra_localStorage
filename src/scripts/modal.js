let modal_cracha = document.querySelector(".modal__cracha");
let modal = document.querySelector(".modal__cracha--box");

function criarModal() {
  modal.innerHTML = `
        <div class="modal__header">
            <h2>Crie seu Crachá aqui</h2>
        </div>
        <div class="modal__body">
            <label class="form-label" for="nome_completo">Nome Completo:</label>
            <input type="text" class="form-control" name="nome_completo" id="nome_completo" placeholder="Digite seu Nome">

            <label class="form-label" for="email">E-mail:</label>
            <input type="emal" class="form-control" name="email" id="email" placeholder="Digite seu e-mail">
            
            <label class="form-label" for="nome_slack">Nome no Slack:</label>
            <input type="text" class="form-control" name="nome_slack" id="nome_slack" placeholder="Digite seu Nome no Slack">
            
            <label class="form-label" for="ocupacao">Ocupação:</label>
            <select name="ocupacao" id="ocupacao" class="form-select">
                <option selected>Selecione sua ocupação na Kenzie:</option>
                <option value="Instrutor">Instrutor</option>
                <option value="Estudante">Estudante</option>
                <option value="Monitor">Monitor</option>
            </select>
        </div>
        <div class="modal__footer">
            <button class="btn__close btn btn-danger">Sair</button>
            <button class="btn__cadastrar btn btn-success">Cadastrar</button>
        </div>
    `;
}

function abrirModal() {
  let btnAbrirModal = document.querySelector(".main-introdution__register");
  btnAbrirModal.addEventListener("click", () => {
    modal_cracha.classList.add("show-modal");
    fecharModal();
  });
}

function fecharModal() {
  let btnFecharModal = document.querySelector(".btn__close");
  btnFecharModal.addEventListener("click", () => {
    modal_cracha.classList.remove("show-modal");
  });
}

criarModal();
abrirModal();
