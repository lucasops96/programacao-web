function primo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    let divisor = 5;
    while (divisor * divisor <= numero) {
        if (numero % divisor === 0 || numero % (divisor + 2) === 0) {
            return false;
        }
        divisor += 6;
    }
    return true;
}

function fat(numero){
    let fatNumero = 1
    for(let i = 2; i < numero+1;i++){
        fatNumero *= i; 
    }

    return fatNumero
}

function proxPrimos(numero){
    let tresPrimos = []
    let prox = numero + 1

    while(tresPrimos.length < 3){
        if(primo(prox)){
            tresPrimos.push(prox)
        }
        prox += 1
    }

    return tresPrimos.join(', '); 
}

function strFat(numeros){
    let texto = ''
    
    numeros.map(i=>{
        texto +=`${i} : ${fat(i)} , ${proxPrimos(i)} <br>`
    });

    return texto
}

function fatorial(){
    let numeros = document.getElementById('lista-numeros').value

    try {
        numeros = numeros.split(',')
        numeros = numeros.map((i)=> Number(i.replace(/\s/g, '')))
        numeros.map((i)=>{
            if(isNaN(i)) {
                throw new Error('Digite apenas valores Inteiros.') ;
            }
        })
    
        document.getElementById('resultado').innerHTML = strFat(numeros)
    } catch (error) {
        document.getElementById('resultado').innerHTML = `<span style="color:red;">${error.message}</span>`
    }
}