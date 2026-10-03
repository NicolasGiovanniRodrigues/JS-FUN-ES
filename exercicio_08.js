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
    function comparar(a, b) {
      if (a === b) return "Os números são iguais.";
      return "Maior número: " + (a > b ? a : b);
    }
    alert(comparar(lerNumero("Primeiro número:"), lerNumero("Segundo número:")));
  } catch (erro) { alert(erro.message); }
}
