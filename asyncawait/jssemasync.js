function bestBand(band) {

    return new Promise((resolve, rejected) => {
        
        if(band = "Queen"){
            resolve ({
                name: band,
                message: 'Melhor banda',
                sucess: true,
            })
        } else{
            rejected({
                sucess: false,
                message: ' Não muito...'
            })
        }
    })
}


function bestMusic(response) {

    return new Promise((resolve, rejected) => {
        
        if(response.sucess){
            resolve ('Bohemia Rhapsody by' + response.bestBand)
        } else{
            rejected('Você conhece Queen?')
        }
    })
}


bestBand('Queen')
    .then((result) => {
        console.log('Checking the answer...');
        return bestRockSong(response)
    })
    .then((response) => {
        console.log('QUEEEEEN!');
        console.log(response)
    })
    .catch(err => {
        console.log(err.message)
    })
