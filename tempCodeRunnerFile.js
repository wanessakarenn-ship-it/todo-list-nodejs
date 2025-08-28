// importe a biblioteca prompt-sync
const prompt = require('prompt-sync')({ sigint: true });

// O array que armazenará as tarefas como objetos
let tarefas = [];

//Cada objeto de tarefa pode ter a seguinte estrutura
//A propriedade concluida usará um valor booleano (true ou false) para indicar o status da tarefa

// Exemplo de objeto de tarefa:
// { descricao: 'Comprar pão', concluida: false }
//Essa função deve solicitar a descrição da nova tarefa, criar o objeto e adicioná-lo ao array tarefas.
//Usei if/else para validar se a descrição não está vazia.
//if (se): O código dentro do bloco if será executado se a condição for verdadeira.
//else (senão): O código dentro do bloco else será executado senão, ou seja, se a condição do if for falsa.

function adicionarTarefa() {
  const descricao = prompt("Digite a descrição da nova tarefa: ");
  if (descricao.trim() !== '') { // Valida a entrada para não adicionar tarefas vazias
    tarefas.push({
      descricao: descricao,
      concluida: false
    });
    console.log("Tarefa adicionada com sucesso!");
  } else {
    console.log("A descrição da tarefa não pode ser vazia.");
  }
}
//Esta função irá iterar sobre o array tarefas e exibir cada uma no console de forma clara. Usa um laço de repetição (por exemplo, for ou forEach) para isso.
function listarTarefas() {
  if (tarefas.length === 0) {
    console.log("Nenhuma tarefa para listar.");
    return;
  }

  console.log("\n--- Suas Tarefas ---");
  tarefas.forEach((tarefa, index) => {
    // Usamos um emoji para representar o status
    const status = tarefa.concluida ? '✔️' : '❌'; 
    console.log(`${index + 1}. [${status}] ${tarefa.descricao}`);
  });
  console.log("--------------------");
}
//Aqui, a saída é formatada para ficar mais fácil de ler, incluindo um índice e um emoji para o status.
//Esta função deve perguntar ao usuário qual tarefa ele deseja marcar como concluída, usando o número da tarefa na lista.
function marcarComoConcluida() {
  listarTarefas();
  if (tarefas.length === 0) {
    return;
  }

  const numero = prompt("Digite o número da tarefa que deseja marcar como concluída: ");
  const index = parseInt(numero) - 1; // Converte a string para número e ajusta para o índice do array

  if (index >= 0 && index < tarefas.length) {
    if (tarefas[index].concluida) {
      console.log("Esta tarefa já está concluída.");
    } else {
      tarefas[index].concluida = true;
      console.log("Tarefa marcada como concluída!");
    }
  } else {
    console.log("Número de tarefa inválido.");
  }
}

//Aqui, usamos estruturas de decisão (if/else) para validar se o número digitado é válido e se a tarefa já não está concluída.
//crie a função de menu e o laço de repetição que mantém o programa rodando.

function menu() {
  console.log("\n--- Menu ---");
  console.log("1. Adicionar tarefa");
  console.log("2. Listar tarefas");
  console.log("3. Marcar como concluída");
  console.log("0. Sair");
  return prompt("Escolha uma opção: ");
}

function main() {
  let rodando = true;
  while (rodando) {
    const opcao = menu();
    switch (opcao) {
      case '1':
        adicionarTarefa();
        break;
      case '2':
        listarTarefas();
        break;
      case '3':
        marcarComoConcluida();
        break;
      case '0':
        console.log("Saindo do programa. Até mais!");
        rodando = false;
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
}

main(); // Chama a função principal para iniciar o programa

//O laço while continua até que a variável rodando se torne false, o que só acontece quando o usuário escolhe a opção 0. 