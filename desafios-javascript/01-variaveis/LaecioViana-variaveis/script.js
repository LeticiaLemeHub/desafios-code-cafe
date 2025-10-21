// 📘 INSTRUÇÕES GERAIS
// Resolva os exercícios abaixo utilizando variáveis em JavaScript.
// Você deve exibir o resultado de cada exercício tanto:
// ✅ No terminal, rodando o arquivo com Node.js (ex: node script.js)
// ✅ No navegador, criando um arquivo .html que carregue este script via <script src="script.js"></script>
// Use console.log() para exibir os resultados.

// ----------------------------
// 🧠 Exercício 1
// Crie uma variável chamada `nome` e atribua a ela o seu primeiro nome.
// Em seguida, exiba o valor dessa variável no console.
// ----------------------------
  let nome = "Laécio"
  console.log(nome)
// ----------------------------
// 🧠 Exercício 2
// Crie três variáveis:
// - `idade` (número inteiro)
// - `altura` (número com ponto decimal)
// - `estudando` (booleano: true ou false)
// Exiba todas elas no console, uma por linha.
// ----------------------------

let idade = 32
let altura = 1.81
let estudando = true

console.log(`Eu tenho ${idade} anos de idade`)
console.log(`Minha  altura  é  de  ${altura} metros`)
console.log(`Estou  estudando ? ${estudando}`)

// ----------------------------
// 🧠 Exercício 3
// Crie uma variável chamada `mensagem` e atribua a ela o valor "Bem-vindo ao curso de JavaScript!".
// Depois, modifique o valor da variável para "Curso iniciado com sucesso!".
// Exiba os dois valores no console: o valor antes e depois da alteração.
// ----------------------------

let mensagem = "Bem vindo  ao curso de Javascript!"
console.log(mensagem)
mensagem = "Curso iniciado com sucesso!"
console.log(mensagem)

// ----------------------------
// 🧠 Exercício 4
// Crie duas variáveis chamadas `primeiroNome` e `sobrenome`.
// Depois, crie uma terceira variável chamada `nomeCompleto` que junte os dois nomes com um espaço entre eles.
// Exiba `nomeCompleto` no console com a seguinte frase:
// "Nome completo: [nomeCompleto]"
// ----------------------------

let primeiroNome = "Laécio"
let sobreNome = "Da  Conceição"
let nomeCompleto = primeiroNome + " " + sobreNome
console.log("Nome completo:" + " " + nomeCompleto)

// ----------------------------
// 🧠 Exercício 5
// Crie uma constante chamada `pi` com o valor 3.14
// Depois crie uma variável `raio` com valor 4
// Calcule a área do círculo (área = pi * raio * raio) e exiba no console:
// "Área do círculo: [resultado]"
// ----------------------------

const pi = 3.14
let raio = 4

let areaCirculo = pi * (raio * raio)
console.log("Área  do círculo: " + areaCirculo)
