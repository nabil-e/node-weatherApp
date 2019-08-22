const request = require('request')
const unit = 'auto' // us for F°
const lang = 'fr' // change the language
const limite = 1

const map = `https://api.mapbox.com/geocoding/v5/mapbox.places/Liège-herve.json?access_token=pk.eyJ1IjoibmFiaWwtZSIsImEiOiJjanptdmtzd2IwZ2dsM2hveGphcm92cHNsIn0.77bsmqQ5yeccnT1pNXtzaA&language=${lang}&limit=${limite}`

request({url: map, json: true}, (err, res) => {
    const latlon = res.body.features[0].center
    const url = `https://api.darksky.net/forecast/5787f0a2586effc6189a13dc45d00f27/${latlon[1]},${latlon[0]}?units=${unit}&lang=${lang}`
    
    request({url: url, json: true}, (error, response) => {
            const resp = response.body.currently
            console.log(res.body.features[0].place_name)
            console.log('--------------------------------\n')
            console.log(`${response.body.daily.data[0].summary}\nIl fait ${resp.temperature} degrés.\nIl y a ${resp.precipProbability}% de chance de précipitation.`)        
    })
})
 
// console.log(req.lat)



    // const data = JSON.parse(res.body)
    // console.log(res.body.currently)
    
    // console.log(res.body.features[0].center[1])    
