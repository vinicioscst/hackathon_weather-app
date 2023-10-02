"use client";

import { useState, useEffect } from "react";
import { City } from "./types/cities";
import SearchBar from "./components/Search";
import { CitiesList } from "./components/CitiesList";

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
    <main className="w-full max-w-3xl min-h-screen my-0 mx-auto py-5 px-5 flex flex-col gap-10 justify-between items-center">
      <SearchBar setSearch={setSearch} />
      <CitiesList data={data}/>
      <footer></footer>
    </main>
  );
}
