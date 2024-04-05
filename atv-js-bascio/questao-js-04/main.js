
function calculo(){
    let numeros = document.getElementById('lista-numeros').value

   try {
    numeros = numeros.split(',')
    numeros = numeros.map((i)=> Number(i.replace(/\s/g, '')))
    numeros.map((i)=>{
        if(isNaN(i)) {
            throw new Error('Digite apenas valores Inteiros.') ;
        }
    })
    
    let positivos = 0 
    let negativos = 0
    let media_cal = numeros.reduce((total,valor)=> total + valor,0) / numeros.length

    numeros.map((i)=> i > 0 ? positivos++ : negativos++)

    let percentual_positivos = positivos / numeros.length * 100
    let percentual_negativos = negativos / numeros.length * 100

    let texto = `<strong>Números:</strong> ${numeros} 
    <br> <strong>Média:</strong> ${media_cal}
    <br> <strong>Positivos:</strong> ${positivos}
    <br> <strong>Negativos:</strong> ${negativos}
    <br> <strong>Percentual Positivos:</strong> ${percentual_positivos}%
    <br> <strong>Percentual Negativos:</strong> ${percentual_negativos}%`

    document.getElementById('resultado').innerHTML = texto
   } catch (error) {
    document.getElementById('resultado').innerHTML = `<span style="color:red;">${error.message}</span>`
   }
}