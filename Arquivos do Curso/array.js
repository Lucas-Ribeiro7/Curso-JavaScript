let num = [3,52,6,54];
console.log(num);
console.log(`O nosso vetor é ${num}`);
console.log("O valor da posição 2 é " + (num[1]));
num.push(8);
console.log(`O vetor atualizado é ${num}`);
console.log("O vetor em ordem " + num.sort());
console.log(num);
var passo = num.indexOf(6);
console.log(`O valor 6 está na posição ${passo}`);
