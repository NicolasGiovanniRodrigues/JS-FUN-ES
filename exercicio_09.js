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
    function somar(a, b) { return a + b; }
    function subtrair(a, b) { return a - b; }
    function multiplicar(a, b) { return a * b; }
    function dividir(a, b) { if (b === 0) throw new Error("Não é possível dividir por zero."); return a / b; }
    const a = lerNumero("Primeiro número:");
    const b = lerNumero("Segundo número:");
    const operacao = lerTexto("Escolha: 1 soma, 2 subtração, 3 multiplicação, 4 divisão");
    const funcoes = { "1": somar, "2": subtrair, "3": multiplicar, "4": dividir };
    if (!funcoes[operacao]) throw new Error("Operação inválida.");
    alert("Resultado: " + funcoes[operacao](a, b));
  } catch (erro) { alert(erro.message); }
}
