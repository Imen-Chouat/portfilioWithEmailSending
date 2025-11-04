import Link from "next/link";
import Image from "next/image";
import SocialIcon from "./socialIcon";
import NavList from "./navList";
export default function Slidbar() {
    return  (
        <nav className="fixed top-0 left-0 h-full w-64 bg-black shadow-md p-7 flex flex-col justify-between text-white pl-12 pt-12">
            <div>
                <div className="text-white text-3xl font-bold mb-8">
                    <h1>IC</h1>
                </div>
                <div>
                    <NavList/>
                </div>

            </div>
            
            <div>
                <SocialIcon />
                <p className="my-4" >© 2025 Imen Chouat</p>
            </div>
        </nav>
    )
}