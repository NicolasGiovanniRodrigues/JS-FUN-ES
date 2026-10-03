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
    const usuario = lerTexto("Usuário:");
    const senha = lerTexto("Senha:");
    alert(verificarLogin(usuario, senha) ? "Login realizado com sucesso." : "Usuário ou senha errados.");
  } catch (erro) { alert(erro.message); }
}
