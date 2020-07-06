var num = [1,6,8,9,45,54,74];

for(let pos = 0 ; pos<num.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
console.log("OU");

for(var posi in num){
    console.log(`A posição ${posi} tem o valor ${num[posi]}`);
}