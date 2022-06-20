let dev = 'Lucio';

function callbackDev(callback, callbackErro) {

    return new Promise((resolve, rejected) => {
        
        if(dev != "Lucio"){
            resolve ({
                name: 'Está errado, ',
                message: dev + ' não é nosso dev!',
            })
        } else{
            rejected({
                name: dev,
                message: ' é o nosso dev'
            })
        }
    })
}


callbackDev()
    .then((result) => {
        console.log(result.name + result.message)
    }).catch((error) => {
        console.log(error.name + '' + error.message)
    }) 
