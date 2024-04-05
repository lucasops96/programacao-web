function verificarImparMultiplo(numero){
    return numero %2 !== 0 && (numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0);
}

function strSoma(numeros){
    let texto = ''
    let total = 0
    for(let i=0;i< numeros.length;i++){
        total += numeros[i]
        if(i == numeros.length-1){
            console.log(numeros[i])
            texto += `${numeros[i]} = ${total}`
        }else{
            texto += `${numeros[i]} + `
        }
    }

    return texto
}

function somar(){
    let numeros = document.getElementById('lista-numeros').value

    try {
        numeros = numeros.split(',')
        numeros = numeros.map((i)=> Number(i.replace(/\s/g, '')))
        numeros.map((i)=>{
            if(isNaN(i)) {
                throw new Error('Digite apenas valores Inteiros.') ;
            }
        })

        numeros = numeros.filter(verificarImparMultiplo)

        document.getElementById('resultado').innerHTML = strSoma(numeros)
    } catch (error) {
        document.getElementById('resultado').innerHTML = `<span style="color:red;">${error.message}</span>`
    }
}