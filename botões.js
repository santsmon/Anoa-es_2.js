// --- 1. REGRAS (Lógica Direta) ---
js
const soma = (a, b) => a + b;
const subtrai = (a, b) => a - b;
const multiplica = (a, b) => a * b;
const divide = (a, b) => a / b;

// --- 2. MOTOR DE EXECUÇÃO ---
function dvCalcular(operacaoLogica) {
  // Captura os valores dos inputs
  const n1 = Number(document.querySelector("#v1").value);
  const n2 = Number(document.querySelector("#v2").value);
  const campoResultado = document.querySelector("#res");

  // Executa a lógica recebida e exibe o resultado
  campoResultado.innerText = operacaoLogica(n1, n2);
}

html
<div class="calculadora">
  <h3>Calculadora</h3>
  
  <input id="v1" type="number" placeholder="Valor 1">
  <input id="v2" type="number" placeholder="Valor 2">
  
  <div class="botoes">
    <button onclick="dvCalcular(soma)">+</button>
    <button onclick="dvCalcular(subtrai)">-</button>
    <button onclick="dvCalcular(multiplica)">*</button>
    <button onclick="dvCalcular(divide)">/</button>
  </div>
  
  <p>Resultado: <strong id="res">0</strong></p>
</div>

css
.calculadora {
  font-family: sans-serif;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 250px;
  background-color: #f9f9f9;
}

input {
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
}

.botoes {
  display: flex;
  gap: 10px;
  justify-content: center;
}

button {
  padding: 10px 15px;
  cursor: pointer;
}


  
