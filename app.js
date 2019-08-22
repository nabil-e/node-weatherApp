const request = require('request')
const unit = 'auto' // us for F°
const lang = 'fr' // change the language

const url = `https://api.darksky.net/forecast/5787f0a2586effc6189a13dc45d00f27/50.6333,5.8?units=${unit}&lang=${lang}`

request({url: url, json: true}, (err, res) => {
    // const data = JSON.parse(res.body)
    // console.log(res.body.currently)
    const resp = res.body.currently
        console.log(`${res.body.daily.data[0].summary}\nIt is currently ${resp.temperature} degrees out.\nThere is ${resp.precipProbability}% chance of rain`)
        
})