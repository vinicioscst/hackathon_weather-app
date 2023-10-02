import Image from "next/image";
import Logo from "@/public/weather_app.png";

export function Header() {
  return (
    <header className="w-full max-w-3xl my-0 mx-auto px-5 flex flex-wrap justify-center items-center gap-4 select-none">
      <Image src={Logo} alt="Weather App" draggable="false" />
      <h1 className="text-4xl font-black text-gray-200">Weather <span className="font-medium">App</span></h1>
    </header>
  );
}
