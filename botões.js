// --- Funções Matemáticas ---
function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// --- Interface (HTML via JS) ---
document.write(`
 <div style="font-family: Verdana, sans-serif; padding: 20px; border: 1px solid #ccc; width: 300px;">
  <h2>Calculadora</h2>
  Valor 1: <input id="dvInput1" type="number" placeholder="0"><br><br>
  Valor 2: <input id="dvInput2" type="number" placeholder="0"><br><br>
  Operação:
  <button type="button" onclick="dvCalcular(OPERACAO_SOMA)">+</button> 
  <button type="button" onclick="dvCalcular(OPERACAO_SUBTRACAO)">-</button> 
  <button type="button" onclick="dvCalcular(OPERACAO_MULTIPLICACAO)">*</button> 
  <button type="button" onclick="dvCalcular(OPERACAO_DIVISAO)">/</button><br><br>
  Resultado: <span id="dvResultadoCalculo" style="border: solid 1px #aaa; padding:3px; font-weight: bold;">0</span>
 </div>
`);

// --- Constantes para identificar as operações ---
const OPERACAO_SOMA = 1;
const OPERACAO_SUBTRACAO = 2;
const OPERACAO_MULTIPLICACAO = 3;
const OPERACAO_DIVISAO = 4;

// --- Lógica de Controle ---
function dvCalcular(dvOperacao) {
  // Captura os valores dos inputs e converte para número
  let dvValorOp1 = Number(document.querySelector("#dvInput1").value);
  let dvValorOp2 = Number(document.querySelector("#dvInput2").value);
  let dvResult = document.querySelector("#dvResultadoCalculo");

  // O Switch decide qual função chamar dependendo do botão clicado
  switch (dvOperacao) {
    case OPERACAO_SOMA:
      dvResult.innerHTML = soma(dvValorOp1, dvValorOp2);
      break;
    case OPERACAO_SUBTRACAO:
      dvResult.innerHTML = subtrai(dvValorOp1, dvValorOp2);
      break;
    case OPERACAO_MULTIPLICACAO:
      dvResult.innerHTML = multiplica(dvValorOp1, dvValorOp2);
      break;
    case OPERACAO_DIVISAO:
      // Verificação simples para evitar divisão por zero
      dvResult.innerHTML = dvValorOp2 !== 0 ? divide(dvValorOp1, dvValorOp2) : "Erro (div/0)";
      break;
  }
}
