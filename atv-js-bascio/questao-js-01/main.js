function ordenar(){
    let texto = document.getElementById('lista-strings').value

    texto = texto.split(',')
    texto = texto.map((i)=> i.trim())
    texto.sort()
    
    document.getElementById('p-strings').innerHTML = texto
}