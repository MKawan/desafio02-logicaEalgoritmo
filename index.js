/*
Entendendo o Desafio
 
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularNivel(xp) {
    let nivel;
  
    switch (true) {
      case xp < 1000:
        nivel = 'Ferro';
        break;
      case xp >= 1001 && xp <= 2000:
        nivel = 'Bronze';
        break;
      case xp >= 2001 && xp <= 5000:
        nivel = 'Prata';
        break;
      case xp >= 5001 && xp <= 7000:
        nivel = 'Ouro';
        break;
      case xp >= 7001 && xp <= 8000:
        nivel = 'Platina';
        break;
      case xp >= 8001 && xp <= 9000:
        nivel = 'Ascendente';
        break;
      case xp >= 9001 && xp <= 10000:
        nivel = 'Imortal';
        break;
      case xp >= 10001:
        nivel = 'Radiante';
        break;
      default:
        nivel = 'Nível não definido';
    }
  
    return nivel;
}

rl.question('Digite o nome do Heroi: ', (heroi) => {

  
  rl.question('Digite o xp 1 a 10001: ', (valor) => {
    
      console.log(`O Herói de nome ${heroi} está no nível de ${calcularNivel(valor)}`)
      rl.close();
    });
});
