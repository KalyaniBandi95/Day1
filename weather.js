var request = require('request')


var dburl = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&
appid=b3aaa0b3323c0baab93aff38f75b44cb&units=metric`;

request({
    url:dburl,
    json:true
},function(error, responce,body){
    if(error){
        console.log("Unable to connect weather");
    }
    else{
        console.log(body.main.temp + " in " + body.name);
    }
}
)

//854a47f74df0c6977f85936faa792b87