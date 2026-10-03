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
    function contarAprovados(notas) {
      let quantidade = 0;
      for (const nota of notas) if (nota >= 6) quantidade++;
      return quantidade;
    }
    const notas = [8, 5, 6, 9, 4, 7, 3, 10];
    alert("Alunos aprovados: " + contarAprovados(notas));
  } catch (erro) { alert(erro.message); }
}
