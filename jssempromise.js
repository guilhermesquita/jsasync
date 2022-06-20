function sumNumbers(){
    let result = 1+1;

    if(result == 2){
        sucesso()
    }

    else{
        erro()
    }
}

function sucesso(){
    console.log('Certo, numero 2!')
}

function erro(){
    console.log('Ooops! Algo de errado :/ ')
}

sumNumbers();