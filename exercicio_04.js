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
    function multiplicar(a, b) { return a * b; }
    const a = lerNumero("Informe o primeiro número:");
    const b = lerNumero("Informe o segundo número:");
    const resultado = multiplicar(a, b);
    alert("Resultado: " + resultado);
  } catch (erro) { alert(erro.message); }
}
