function colocarTodasPalavrasEmMaiusculo(array){
    return new Promise((resolve,reject)=>{
        const palavrasMaiusculas = array.map((p)=>{
            if(typeof p !== 'string'){
                reject(`Erro, valor ${p} não é String`)
                return;
            }

            return p.toUpperCase()
        })
        resolve(palavrasMaiusculas)
    })
}

function inverterPalavras(array){
    return new Promise((resolve,reject)=>{
        const palavrasInvertidas = []
        array.forEach(e => {
            if(typeof e !== 'string'){
                reject(`Erro, valor ${e} não é String`)
                return;
            }
            palavrasInvertidas.push(e.split('').reverse().join(''))
        });
        resolve(palavrasInvertidas)
    })
}

let palavras = ['miguel','barco','estrada','celular','liverpool','sobral']

colocarTodasPalavrasEmMaiusculo(palavras)
    .then((palavrasMaiusculas)=>{
        console.log(palavrasMaiusculas)
        return inverterPalavras(palavras)
    })
    .then((palavrasInvertidas)=> console.log(palavrasInvertidas))
    .catch((e)=> console.log(e))