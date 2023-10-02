"use client";
import { CityInfo } from "@/app/types/cities";
import { useState, useEffect } from "react";

export default function CityWeather({ params }: { params: { url: string } }) {
  const [city, setCity] = useState<CityInfo | null>(null);
  const [weatherInfo, setWeatherInfo] = useState<CityInfo | null>(null);

  useEffect(() => {
    console.log(params.url);
    async function getData() {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=64c7b530ec874c488f4233042232409&q=${params.url}`
      );

      if (res.ok) {
        const cities: CityInfo = await res.json();

        setCity(cities);
      }
    }

    getData();
  }, []);

  return (
    <div>
      <h3>{city?.location.name}</h3>
      <p>{city?.location.region}</p>
      <p>{city?.location.country}</p>
      <p>{city?.location.localtime}</p>

      <div>
        {city?.current.condition.text}
        {city?.current.condition.code}
        <img
          src={city?.current.condition.icon}
          alt={city?.current.condition.text}
        />
      </div>
    </div>
  );
}
