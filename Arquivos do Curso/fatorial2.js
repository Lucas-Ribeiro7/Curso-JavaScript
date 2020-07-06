function fatorial(n){
    if (n==1){
        return 1;
    }else{
        return n * fatorial(n-1); //É a lógica de que o fatorial de 5 é igual á 5! = 5 * 4!
    }
}

console.log(fatorial(5));