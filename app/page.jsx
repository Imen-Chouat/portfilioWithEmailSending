'use client';
import Image from "next/image";
import { useState , useEffect } from "react";
export default function HomePage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  useEffect(() => {
    const storedPhone = localStorage.getItem("phone") || process.env.PHONE_NUMBER;
    const storedEmail = localStorage.getItem("email") || process.env.EMAIL_USER;
    setPhoneNumber(storedPhone);
    setEmailAddress(storedEmail);
    localStorage.setItem("phone", storedPhone);
    localStorage.setItem("email", storedEmail);
  }, []);
  return (
    <main className="flex items-center w-full h-full space-x-4 py-20 pl-20">
      <div className="flex flex-col items-center w-[50%] space-y-6">
        <div className="relative font-light font-mono text-gray-800 space-y-4 justify-center">
          <p className="text-6xl">
            MY NAME IS <span className="font-black">IMEN CHOUAT</span>
          </p>
          <div className="absolute -top-1 -z-1 -left-8">
            <Image
              src="/icon/circuitQ.svg"
              alt="Circuit Icon"
              width={130}
              height={130}
            />
          </div>
          <p className="text-xl" ><span className="italic font-bold" >Passionate Developer</span> based in Algeria</p>
        </div>

        <div className="w-full mt-6">
          <button>
            <span className="px-6 py-4 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-orange-600 transition-colors duration-300">let's talk with me !</span>
          </button>
        </div>

        <div className="flex space-x-4 my-10 w-full text-sm">
          <div className="flex space-x-2">
            <Image
              src="/icon/phone.svg"
              alt="Phone icon"
              width={20}
              height={20}
              className="rounded-full bg-gray-200 p-1"
            />
            <span className="text-gray-600 font-black">{phoneNumber}</span>
          </div>
          <div className="flex space-x-2">
            <Image
              src="/icon/email.svg"
              alt="Email icon"
              width={20}
              height={20}
              className="rounded-full bg-gray-200 p-1"
            />
            <span className="text-gray-600 font-black">{emailAddress}</span>
          </div>
        </div>
      </div>

      <div>
        <Image
          src="/icon/img.svg"
          alt="Developer Illustration"
          width={390}
          height={360}
        />
      </div>
    </main>
  );
}