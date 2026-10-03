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
    function calcularMedia(a, b) { return (a + b) / 2; }
    function verificarSituacao(media) { return media >= 6 ? "Aprovado" : "Reprovado"; }
    const media = calcularMedia(lerNumero("Primeira nota:", false, 0, 10), lerNumero("Segunda nota:", false, 0, 10));
    alert("Média: " + media + "\nSituação: " + verificarSituacao(media));
  } catch (erro) { alert(erro.message); }
}
