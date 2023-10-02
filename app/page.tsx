"use client";

import { useState, useEffect } from "react";
import { City } from "./types/cities";
import SearchBar from "./components/Search";
import { CitiesList } from "./components/CitiesList";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<City[]>([]);

  useEffect(() => {
    async function getData() {
      if (search) {
        const res = await fetch(
          `http://api.weatherapi.com/v1/search.json?key=64c7b530ec874c488f4233042232409&q=${search}`
        );

        if (res.ok) {
          const cities: City[] = await res.json();

          setData(cities);
        }

        if (search.trim() === "") {
          setData([]);
        }
      }
    }

    getData();
  }, [search]);

  return (
    <section className={`w-full max-w-3xl min-h-screen my-0 mx-auto px-5 py-16 flex flex-col ${data.length !== 0 ? "gap-10" : "gap-40"} justify-center items-center bg-transparent`}>
      <section className="w-full flex flex-col gap-10">
        <Header />
        <main className="flex flex-col gap-4 w-full text-[var(--search-list-border)] font-semibold rounded-lg bg-[var(--search-list-bg)]">
          <SearchBar setSearch={setSearch} />
          {data.length !== 0 && <CitiesList data={data} />}
        </main>
      </section>
      <Footer />
    </section>
  );
}
