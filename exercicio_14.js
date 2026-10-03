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
    function contarPares(lista) {
      let quantidade = 0;
      for (const numero of lista) if (numero % 2 === 0) quantidade++;
      return quantidade;
    }
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
    alert("Quantidade de números pares: " + contarPares(numeros));
  } catch (erro) { alert(erro.message); }
}
