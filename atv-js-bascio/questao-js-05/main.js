
function inverter(){
    let numeros = document.getElementById('lista-numeros').value

    try {
        numeros = numeros.split(',')
        numeros = numeros.map((i)=> Number(i.replace(/\s/g, '')))
        numeros.map((i)=>{
            if(isNaN(i)) {
                throw new Error('Digite apenas valores Inteiros.') ;
            }
        })
        numeros = numeros.map((i,indice)=>{
            if((indice)%2 == 0){
                return i**2
            }
            return i
        })
        numeros.reverse()        

        document.getElementById('resultado').innerHTML = numeros

    } catch (error) {
        document.getElementById('resultado').innerHTML = `<span style="color:red;">${error.message}</span>`
    }

}