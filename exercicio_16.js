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
    function encontrarMaior(lista) {
      let maior = lista[0];
      for (let i = 1; i < lista.length; i++) if (lista[i] > maior) maior = lista[i];
      return maior;
    }
    const numeros = [12, 5, 27, 8, 40, 3, 19];
    alert("Maior número da lista: " + encontrarMaior(numeros));
  } catch (erro) { alert(erro.message); }
}
