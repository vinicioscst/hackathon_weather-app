"use client";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { WeatherInfo } from "@/app/components/WeatherInfo";
import { CityInfo } from "@/app/types/cities";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CityWeather({ params }: { params: { url: string } }) {
  const [city, setCity] = useState<CityInfo | null>(null);

  useEffect(() => {    
    async function getData() {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=64c7b530ec874c488f4233042232409&q=${params.url}`
      );

      if (res.ok) {
        const data: CityInfo = await res.json();

        setCity(data);
        document.title = `${data.location.name}, ${data.location.region}, ${data.location.country} | Weather`
      }
    }

    getData();
  }, []);

  return (
    <section className="w-full max-w-3xl min-h-screen my-0 mx-auto px-5 py-16 flex flex-col gap-10 justify-center items-center bg-transparent">
      <section className="w-full flex flex-col gap-10">
        <Link href="/"><Header /></Link>
        <main className="flex flex-col gap-4 w-full text-[var(--search-list-border)] font-semibold">
          <WeatherInfo city={city}/>
        </main>
      </section>
      <Footer />
    </section>
  );
}
