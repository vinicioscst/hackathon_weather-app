import Link from "next/link";
import { City } from "../../types/cities.tsx";

interface CitiesListProps {
    data: City[]
}
export function CitiesList({data}: CitiesListProps){
    return(
        <ul className="w-full flex flex-col bg-[var(--search-list-bg)] p-4 rounded-lg border-[1px] border-[var(--search-list-border)] backdrop-blur-sm gap-4 items-center">
          {data?.map((city) => (
            <li className="text-center">
              <h3 className="font-black text-lg">{city.name}</h3>
              <p>{city.region} | {city.country}</p>
              <Link href={`/weather/${city.url}`} className="underline text-cyan-800 italic">See weather</Link>
            </li>
          ))}
        </ul>
    )
}