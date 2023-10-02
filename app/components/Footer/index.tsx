import GithubWhite from "@/public/github-mark-white.svg"
import Github from "@/public/github-mark.svg"
import Image from "next/image";

interface FooterProps {

}
export function Footer(props : FooterProps){
    return(
        <footer className="my-0 mx-auto">
            <a href="https://github.com/vinicioscst/hackathon_weather-app" title="Github Repository"><Image src={window.matchMedia('(prefers-color-scheme: dark)').matches ? GithubWhite : Github} alt="Github Repository" width={40} className="hover:opacity-75 transition-opacity"/></a>
        </footer>
    )
}