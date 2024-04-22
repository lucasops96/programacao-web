async function colocarTodasPalavrasEmMaiusculo(array){
    return palavrasMaiusculas = array.map((p)=>{
        if(typeof p !== 'string'){
            throw new Error(`Erro, valor ${p} não é String`)
        }

        return p.toUpperCase()
    })
}

async function inverterPalavras(array){
    const palavrasInvertidas = []
    array.forEach(e => {
        if(typeof e !== 'string'){
            throw new Error(`Erro, valor ${e} não é String`)
        }
        palavrasInvertidas.push(e.split('').reverse().join(''))
    });
    return palavrasInvertidas
}

async function main(){
    let palavras = ['miguel','barco',5,'estrada','celular','liverpool','sobral']

    try {
        const palavrasMaiusculas = await colocarTodasPalavrasEmMaiusculo(palavras)
        console.log('Palavras Maiúsculas:',palavrasMaiusculas)

        const palavrasInvertidas = await inverterPalavras(palavras)
        console.log('Palavras Invertidas:',palavrasInvertidas)

    } catch (error) {
        console.log(error.message)
    }
}

main()

