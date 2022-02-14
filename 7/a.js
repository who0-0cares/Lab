request=require('request');
const url="http://api.weatherstack.com/current?access_key=3b8d8bc990109c9624f1d4019e46c4ed&query=New%20York&units=f";
request({url:url},(err,response)=>{
    const data = JSON.parse(response.body);
    console.log("The current temperature is ", data.current.temperature);
    console.log("Country is ", data.location.country);
});
