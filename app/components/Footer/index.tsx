import GithubWhite from "@/public/github-mark-white.svg"
import Github from "@/public/github-mark.svg"
import Image from "next/image";

interface FooterProps {

}
export function Footer(props : FooterProps){
    return(
        <footer className="w-full flex flex-col items-center gap-4">
            <a href="https://github.com/vinicioscst/hackathon_weather-app" title="Github Repository"><Image src={window.matchMedia('(prefers-color-scheme: dark)').matches ? GithubWhite : Github} alt="Github Repository" width={40} className="hover:opacity-75 transition-opacity"/></a>
            <p className="text-xs"><a target="_blank" href="https://icons8.com/icon/MVj2tmasj0Pp/rain-cloud" className="underline text-cyan-800">Rain Cloud</a>, <a target="_blank" href="https://icons8.com/icon/aWBc8fucFZnx/smiling-sun" className="underline text-cyan-800">Smiling Sun</a> and <a target="_blank" href="https://icons8.com/icon/42SQTTISIN17/info" className="underline text-cyan-800">Info</a> icons by <a target="_blank" href="https://icons8.com" className="underline text-cyan-800 font-black">Icons8</a></p>
        </footer>
    )
}