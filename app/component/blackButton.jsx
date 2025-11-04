import Image from "next/image";

export default function BlackButton({text,onclick}) {
    return(
            <button onClick={onclick}>
                <p>{text}</p>
                <div className="bg-gradient-to-r from-purple-500 to-orange-500">
                    <Image alt="icon" src={"/icon/age.svg"} width={20} height={20}/>
                </div>
            </button>
    );
}