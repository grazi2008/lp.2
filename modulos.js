// Função para multiplicar dois números 
export function multiplicar (a, b){
     return a * b; 

 } 
  // Função para somar dois números export 
 function somar (a, b) {
     return a + b;
}
// Importando as funções dos módulos
 import { somar } from './somar.mjs';
 import { multiplicar } from './multiplicar.mjs';
 
  // Utilizando as funções importadas
   const numero1 = 5; 
   const numero2 = 3;

   const resultadoSoma = somar (numero1, numero2); 
   const resultadoMultiplicacao = multiplicar (numero1, numero2);

   console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);
   console.log(`${numero1} * ${numero2} = ${resultadoMultiplicacao}`);
