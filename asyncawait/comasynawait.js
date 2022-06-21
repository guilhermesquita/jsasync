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
            rejected('Você conhece Queen?');
        }
    })
}

async function toTheJob(){
    try{
        const bestRockBandResponse = await bestBand('Queen');
        const bestRockMusicResponse = await bestMusic(bestRockBandResponse);
        console.log(bestRockBandResponse);
    }catch (err){
        console.log(err.message)
    }

}

toTheJob()