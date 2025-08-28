Gerenciador de Tarefas no Console
Este projeto é um simples gerenciador de tarefas que roda diretamente no terminal, feito com JavaScript. Ele permite que os usuários adicionem, visualizem e marquem tarefas como concluídas de forma interativa.

💻 Funcionalidades
O programa oferece um menu de fácil navegação com as seguintes opções:

Adicionar Tarefa: Permite inserir uma nova tarefa na lista. O programa valida se a descrição não está vazia.

Listar Tarefas: Exibe todas as tarefas adicionadas, mostrando seu status de conclusão com emojis (✔️ para concluída e ❌ para pendente).

Marcar como Concluída: Permite marcar uma tarefa específica como concluída usando seu número de índice na lista.

Sair: Encerra a aplicação.

🚀 Como Rodar
Para executar este projeto, você precisa ter o Node.js instalado em sua máquina.

Clone o repositório:

git clone https://Lembrete_tarefas_prompt.js
Acesse a pasta do projeto:

cd Lembrete_tarefas_prompt
Instale as dependências:
Este projeto utiliza a biblioteca prompt-sync. Instale-a com o seguinte comando:

npm install prompt-sync
Execute o programa:

node seu_arquivo.js
(Substitua seu_arquivo.js pelo nome do arquivo do seu projeto.)

🛠️ Estrutura do Código
O código é dividido em funções lógicas para cada funcionalidade, tornando-o fácil de ler e entender:

adicionarTarefa(): Lida com a entrada de novas tarefas.

listarTarefas(): Exibe a lista de tarefas atualizada.

marcarComoConcluida(): Altera o status de uma tarefa.

menu(): Exibe o menu principal de opções.

main(): A função principal que controla o fluxo do programa, usando um laço de repetição while e uma estrutura switch para navegar pelas opções do menu.

As tarefas são armazenadas em um array de objetos, onde cada objeto tem uma descricao (string) e um status concluida (booleano).

✍️ Contribuições
Sinta-se à vontade para sugerir melhorias, como:

Adicionar uma função para remover tarefas.

Permitir a edição da descrição de uma tarefa.

Implementar a persistência de dados (salvar e carregar tarefas em um arquivo).

Se tiver alguma ideia, abra uma issue ou crie um pull request!
