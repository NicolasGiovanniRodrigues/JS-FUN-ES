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
    function calcularTotal(precos) {
      let total = 0;
      for (const preco of precos) total += preco;
      return total;
    }
    function calcularDesconto(total) {
      if (total >= 200) return total * 0.20;
      if (total >= 100) return total * 0.10;
      return 0;
    }
    function moeda(valor) { return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); }
    const precos = [30, 45, 50, 25, 60];
    const total = calcularTotal(precos);
    const desconto = calcularDesconto(total);
    alert("Valor total da compra: " + moeda(total) + "\nValor do desconto: " + moeda(desconto) + "\nValor final: " + moeda(total - desconto));
  } catch (erro) { alert(erro.message); }
}
