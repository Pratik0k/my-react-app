import React from 'react';

// Define your weather images mapping here or import it from another file
const weatherImages = {
    lightrain: 'https://i.pinimg.com/564x/9c/0e/40/9c0e408ab441165a0f3bc648ac049f86.jpg',
    rainy: 'https://images.unsplash.com/photo-1476044591369-74ee6ac6899c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    spring: 'https://images.unsplash.com/photo-1462524500090-89443873e2b4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hot: 'https://images.unsplash.com/photo-1525490829609-d166ddb58678?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hazy: 'https://images.unsplash.com/photo-1603232644299-3111a520928d?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cold: 'https://images.unsplash.com/photo-1524175869111-19b0893d20b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    warm: 'https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fewclouds: 'https://i.pinimg.com/564x/a4/1e/82/a41e82aba3446770c4f4ca994450813d.jpg',
    scatter: 'https://i.pinimg.com/564x/63/f4/39/63f4395cd6f36aaede3889fe676875de.jpg',
    humid: 'https://i.pinimg.com/564x/14/6f/7c/146f7c995c215f60f2f083be07120d40.jpg',
    tornado: 'https://images.unsplash.com/photo-1505672678657-cc7037095e60?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    fog: 'https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thunderstorm: 'https://images.unsplash.com/photo-1654094330331-edf9a390c527?q=80&w=2916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    overcast: "https://i.pinimg.com/564x/8c/62/38/8c62380ef1b1be1f811059efcffe329a.jpg",
    clear: 'https://plus.unsplash.com/premium_photo-1677105700661-dbfad22793ca?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Optional for clear weather
};

export default function Winfo({ result }) {
    const getImageForWeather = (result) => {
       
        
        // Now refine based on temperature ranges
        if (result == "rain") return weatherImages.rainy;
        if (result == "shower rain" || result == "drizzle") return weatherImages.lightrain;
        if (result == "thunderstorm") return weatherImages.thunderstorm;
        if (result == "overcast clouds") return weatherImages.overcast;
        if (result == "few clouds") return weatherImages.fewclouds;
        if (result == "broken clouds") return weatherImages.scatter;
        if (result == "scattered clouds") return weatherImages.scatter;
        if (result == "clear") return weatherImages.clear;
        if (result == "snow") return weatherImages.snow;
        if (result =="haze") return weatherImages.hazy;
        if (result == "humid")return weatherImages.humid;
        if (result == "squall" || result == 'tornado') return weatherImages.tornado;
        if (result == "mist" || result == 'smoke'  || result == 'dust' || result == 'sand' || result == 'fog') return weatherImages.fog;

    
        // Further adjust based on humidity (optional)
       
       
        
        // Fallback image
      
    };

    // Ensure the result object is not null or undefined before accessing properties
    if (!result) {
        return <div>Loading...</div>; // Or any other fallback UI
    }

    // Get the image URL based on the weather data
    const weatherImage = getImageForWeather( result.weather);

    return (
        <div className="w-full flex">
            <div className="flex-1 p-4 font-sans ml-2 text-2xl font-semibold flex justify-center justify-around flex-col">
                {/* Display weather info */}
                <p>Temperature: {result.temp}°C</p>
                <p>Min Temperature: {result.tempMin}°C</p>
                <p>Max Temperature: {result.tempMax}°C</p>
                <p>Humidity: {result.humidity}%</p>
                <p>Feels Like: {result.feelsLike}°C</p>
                <p>Weather: {result.weather}</p>
            </div>

            <div className=' w-[1.5px] h-[480px] bg-black '>
            
            </div>
            <div className="flex-1 ml-2 p-4 flex items-center justify-center">
                {/* Display weather photo */}
                <img src={weatherImage} alt="Weather" className=" rounded-[20px] max-h-[450px] object-cover" />
            </div>
        </div>
    );
}
