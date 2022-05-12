
const weathers = ['EXTRASUNNY','CLEAR','CLOUDS','SMOG','FOGGY','RAIN','SNOWLIGHT','OVERCAST']


mp.events.add('startWeathers', () => {

    setInterval(function (){
        let num = Math.floor(Math.random() * 7);
        let setWeather = weathers[num]
        mp.world.weather = setWeather; // SETTER
        setTimeout(function (){
            mp.world.setWeatherTransition("CLEARING", 600000);
        },300000)

    },1400000)
    console.log(`IRAN HIGH WEATHER : [STARTED.]`);
});


