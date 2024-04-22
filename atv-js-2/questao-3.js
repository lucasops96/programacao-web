const pa = ({n, a1, r})=>{
    let an = a1 + (n-1) * r 

    let sn = ((a1 + an) / 2) * n  

    let texto = `PA: `
    let q = 0
    for(let i = a1;q < n;i+=r){
        q++
        texto += `${i}, `
    }
    console.log('\n'+texto + `\nSoma do elementos: ${sn}`)
}

const pg = ({n, a1, r}) =>{
   let an =  a1 * r **(n-1)
   let sn = 0

   if(r < 1 && r >-1){
    sn = a1 / (1-r)
   }else{
    sn = (a1*(r**n - 1)) / (r-1)
   }

   let texto = `PG: `
   let q = 0
   for(let i = a1;q < n;i*=r){
       q++
       texto += `${i}, `
   }
   console.log('\n'+texto + `\nSoma do elementos: ${sn}`)
}

const obj = {
    id:1,
    nome:'pa',
    n:5,
    a1:1,
    r:3
}

pa(obj)
pg(obj)
