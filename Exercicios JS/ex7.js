/* Desenvolva um programa usando a estrutura do laço incondicional <for>,
incrementando +2 na variável jn_num e apresentando os valores acumulados de 1
a 10. */

let acumulado = 0; // Variável para armazenar o valor acumulado

for (let jn_num = 1; jn_num <= 10; jn_num += 2) {
  acumulado += jn_num; // Soma o valor atual de jn_num ao acumulado
  console.log("Valor de jn_num:", jn_num, "| Acumulado:", acumulado);
}
