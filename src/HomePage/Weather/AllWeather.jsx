import React, { useState, useEffect } from 'react';
import Winfo from './Winfo';

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = '19f80bbae389ed80a06a8d0fae1fc86e'; // Replace with your actual API key
const CITY = 'MUMBAI'; // Replace with the city you want to get weather for

export default function AllWeather() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                let response = await fetch(`${API_URL}?q=${CITY}&appid=${API_KEY}&units=metric`);
                let jsonResponse = await response.json();
                let result = {
                    city: CITY,
                    temp: jsonResponse.main.temp,
                    tempMin: jsonResponse.main.temp_min,
                    tempMax: jsonResponse.main.temp_max,
                    humidity: jsonResponse.main.humidity,
                    feelsLike: jsonResponse.main.feels_like,
                    weather: jsonResponse.weather[0].description
                };
                setWeather(result);
                
                // Optionally set photo here based on weather result
            } catch (err) {
                console.error(err);
            }
        };

        fetchWeather();
    }, []);

    return (
        <div className='border-2 mt-14 p-10 rounded-tl-[25%] rounded-tr-[25%]' style={{backgroundColor : "rgb(72, 226, 226)"}}>
            <div className="text-center mb-8">
                <h2 className="text-black  pt-4 text-3xl font-serif font-bold tracking-wide">Mumbai's Weather</h2>
                <div className="w-[200px] h-[1.2px]  mx-auto mt-2  bg-black " >

                </div>
             </div>
            <div className=''>
                {weather && <Winfo result={weather} />}
            </div>
        </div>
    );
}
