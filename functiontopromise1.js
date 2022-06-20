const dev = "Luc"

function callbackDev(callback, callbackErro){
    if(dev != "Lucio"){
        callbackErro({
            name: 'Está errado, ',
            message: dev + ' não é nosso dev!',
        })
    } else{
        callback({
            name: dev,
            message: ' é o nosso dev'
        })
    }
}

callbackDev((result) => {
    console.log(result.name + result.message)
}, (error) => {
    console.log(error.name + '' + error.message)
}) 
