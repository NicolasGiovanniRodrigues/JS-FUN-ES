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
    function somarLista(lista) {
      let soma = 0;
      for (const numero of lista) soma += numero;
      return soma;
    }
    const numeros = [10, 20, 30, 40, 50];
    alert("Total da soma: " + somarLista(numeros));
  } catch (erro) { alert(erro.message); }
}
