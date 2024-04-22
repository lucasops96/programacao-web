const somaCincoPares = (x)=>{
    let somaTotal = 0;
    let q = 0;
    const somar = (num) => somaTotal += num;

    while(q < 5){
        if (x %2 == 0){
            q++;
            somar(x)
        }
        x++;
    }
    return somaTotal;
}
const saida = (x) => {
    console.log(`O valor de X : ${x}`);
    console.log(`Entrada: ${x} => Saída: ${somaCincoPares(x)}`);
}

saida(11);