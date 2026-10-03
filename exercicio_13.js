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
    function procurarAluno(lista, nome) {
      return lista.some(aluno => aluno.toLocaleLowerCase("pt-BR") === nome.toLocaleLowerCase("pt-BR"));
    }
    const alunos = ["Ana", "Bruno", "Carla", "Diego", "Eduarda"];
    const nome = lerTexto("Informe o nome do aluno:");
    alert(procurarAluno(alunos, nome) ? "Aluno encontrado" : "Aluno não encontrado");
  } catch (erro) { alert(erro.message); }
}
