let p = new Promise((resolve, reject) => {
    let result = 1+1;
    
    if(result == 2){
        resolve('Certo, numero 2!')
    }

    else{
        reject('Ooops! Algo de errado :/')
    }
})

p.then((message) => {
    console.log(message)
}).catch((err) => {
    console.log(err)
})