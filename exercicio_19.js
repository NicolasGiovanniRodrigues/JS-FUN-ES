function lerTexto(mensagem) {
  const valor = prompt(mensagem);
  if (valor === null) throw new Error("Execução cancelada.");
  if (!valor.trim()) throw new Error("Preencha o campo.");
  return valor.trim();
}
function lerNumero(mensagem, inteiro = false, minimo = -Infinity, maximo = Infinity) {
  const valor = Number(lerTexto(mensagem).replace(",", "."));
  if (!Number.isFinite(valor) || (inteiro && !Number.isInteger(valor)) || valor < minimo || valor > maximo)
    throw new Error("Informe um número válido para este exercício.");
  return valor;
}

function executar() {
  try {
    function verificarLogin(usuario, senha) { return usuario === "aluno" && senha === "1234"; }
    function realizarLogin() {
      for (let tentativa = 1; tentativa <= 3; tentativa++) {
        const usuario = lerTexto("Usuário - tentativa " + tentativa + " de 3:");
        const senha = lerTexto("Senha:");
        if (verificarLogin(usuario, senha)) { alert("Login realizado com sucesso."); return; }
        if (tentativa < 3) alert("Usuário ou senha errados. Tentativas restantes: " + (3 - tentativa));
      }
      alert("Acesso bloqueado.");
    }
    realizarLogin();
  } catch (erro) { alert(erro.message); }
}
