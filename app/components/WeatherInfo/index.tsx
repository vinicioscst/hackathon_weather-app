"use client";

import { useState, useEffect } from "react";
import { CityInfo } from "@/app/types/cities";

interface CityInfoProps {
  city: CityInfo | null;
}
export function WeatherInfo({ city }: CityInfoProps) {
  const [scale, setScale] = useState("Celsius");

  useEffect(() => {
    const scalePreference = localStorage.getItem("@WEATHERAPP_scale");

    if (scalePreference) {
      setScale(scalePreference);
    }
  }, []);

  function handleScale(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setScale(value);

    localStorage.setItem("@WEATHERAPP_scale", value);
  }

  return (
    <>
      <section className="w-full flex flex-col justify-between text-[var(--font-color)] rounded-lg bg-[var(--search-list-bg)]">
        <div className="flex items-center justify-between gap-4 p-5 bg-[var(--last-degrade-color)] rounded-t-lg">
          <p>
            {city?.location.name}, {city?.location.region},{" "}
            {city?.location.country}
          </p>
          <fieldset className="flex items-center gap-1">
            <input
              type="radio"
              name="scale"
              id="celsius"
              value="Celsius"
              onChange={handleScale}
              checked={scale === "Celsius" ? true : false}
              className="appearance-none"
            />
            <label className="py-1 px-2 rounded-full" htmlFor="celsius">
              °C
            </label>
            <input
              type="radio"
              name="scale"
              checked={scale === "Fahrenheit" ? true : false}
              id="fahrenheit"
              value="Fahrenheit"
              onChange={handleScale}
              className="appearance-none"
            />
            <label className="py-1 px-2 rounded-full" htmlFor="fahrenheit">
              °F
            </label>
          </fieldset>
        </div>
        <div className="flex flex-wrap-reverse items-center gap-5 text-center sm:text-start justify-center sm:justify-between py-5 px-10">
          <div className="flex flex-col">
            {scale === "Celsius" ? (
              <h2 className="text-clamp font-black">{city?.current.temp_c}°</h2>
            ) : (
              <h2 className="text-clamp font-black">{city?.current.temp_f}°</h2>
            )}
            <h4 className="text-xs">{city?.current.condition.text}</h4>
          </div>
          <div className="flex flex-col items-center justify-center">
            <figure>
              <img
                src={city?.current.condition.icon}
                alt={city?.current.condition.text}
                className="w-20"
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-6 py-5 px-10 text-[var(--font-color)] rounded-lg bg-[var(--search-list-bg)]">
        <div className="w-full flex flex-col text-center">
          <p>Feels like</p>
          {scale === "Celsius" ? (
            <h3 className="text-4xl font-black">
              {city?.current.feelslike_c}°
            </h3>
          ) : (
            <h3 className="text-4xl font-black">
              {city?.current.feelslike_f}°
            </h3>
          )}
        </div>

        <div className="w-full flex justify-between flex-wrap gap-5">
          <div className="w-full">
            <ul className="flex flex-col gap-10">
              <li>
                <div className="flex flex-col gap-2">
                  <p className="border-b-2 pb-1 border-[var(--last-degrade-color)]">Coordinates</p>
                  <p>{city?.location.lat}, {city?.location.lon}</p>
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-2">
                  <p className="border-b-2 pb-1 border-[var(--last-degrade-color)]">Humidity</p>
                  <p>{city?.current.humidity}</p>
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-2">
                  <p className="border-b-2 pb-1 border-[var(--last-degrade-color)]">UV</p>
                  <p>{city?.current.uv}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <ul className="flex flex-col gap-10">
              <li>
                <div className="flex flex-col gap-2">
                  <p className="border-b-2 pb-1 border-[var(--last-degrade-color)]">Wind (MPH)</p>
                  <p>{city?.current.wind_mph}</p>
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-2">
                  <p className="border-b-2 pb-1 border-[var(--last-degrade-color)]">Wind (KPH)</p>
                  <p>{city?.current.wind_kph}</p>
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-2">
                  <p className="border-b-2 pb-1 border-[var(--last-degrade-color)]">Wind direction</p>
                  <p>{city?.current.wind_dir}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
