"use client";
import Image from "next/image";
import { useState , useEffect } from "react";
export default function AboutPage() {
  const [phoneNumber , setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  useEffect(() => {
    const storedPhone = localStorage.getItem("phone") || "+213775182696";
    const storedEmail = localStorage.getItem("email") || "1imenchouat@gmail.com";
    setPhoneNumber(storedPhone);
    setEmailAddress(storedEmail);
    localStorage.setItem("phone", storedPhone);
    localStorage.setItem("email", storedEmail);
  }, []);
  const infos = [
    { label: "phone", src: "/icon/phone.svg",value: phoneNumber },
    { label: "age", src: "/icon/age.svg", value: "19" },
    { label: "email", src: "/icon/email.svg",value: emailAddress},
    { label: "Location", src: "/icon/location.svg", value: "Algeria" },
  ];
  const experiences = [
    {
      title: "Years Experienxe",  
      duration: "+2",
      description:
        "Developed and maintained user interfaces using React.js and Tailwind CSS. Collaborated with designers to implement responsive designs and improve user experience.",
    },
    {
      title: "Full Stack Projects",
      duration: "+4",    
      description:  
        "Assisted in building web applications using Next.js. Gained experience in version control with Git and participated in code reviews to enhance coding skills.",
    },
  ];

  return (
    <main>
      <div>
        <p className="italic text-sm font-bold mb-2" >Nice to meet you!</p>
        <p className="text-4xl font-black">WELCOME TO ...</p>
      </div>
      <div className="flex space-x-10 mt-5 w-[100%] text-center" >
        <div className="flex flex-col min-w-[40%] max-w-2/3 items-center space-y-4" >
          { /*Image illustrating about section*/ }
          <div>
            <Image
            src={"/icon/halfCycle.svg"}
            alt="About Illustration"
            width={300}
            height={300}
            />
          </div>
          { /*Description about us*/ }
          <div className="w-full justify-center items-center text-center " >
            <p className="bg-clip-text font-black text-transparent text-3xl bg-gradient-to-r from-purple-500 to-orange-500 mt-4" >Imen Chouat</p>
            <p className="text-lg mt-2 mb-4" ><span className="font-bold italic" >Developer</span> based in <span className="font-bold italic">Algeria</span></p>
          </div>
          <div className="font-black self-center text-gray-600 mx-6 hover:text-black" >
            <a href="/imencv.pdf" download>Download cv</a>
          </div>
        </div>
        {/* the second content can go here */ }
        <div className="flex flex-col min-w-1/2 max-w-2/3" >
          <div className="grid grid-cols-2 gap-3 border-b-2 pb-4 mb-4 border-gray-300">
            {infos.map((info) => (
              <div key={info.label} className="flex space-x-4 my-4">
                <div className="w-6 h-6 bg-gray-200 p-1.5 rounded-full flex justify-center items-center">
                  <Image alt={info.label} src={info.src} width={info.label == "location" ? 8 : 20} height={info.label == "Location" ? 8 : 20} />
                </div>
                <div>
                  <p className="font-bold" >{info.value}</p>
                </div>
              </div>
            ))}
          </div>
          {/* the experience description */ }
          <div className="flex space-x-10">
            {experiences.map((exp) => (
              <div key={exp.title} className="mb-6 flex flex-col space-y-2">
                <div className="flex items-center space-x-4" >
                  <span className="font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500 text-6xl p-1 ">{exp.duration}</span>
                  <p className="font-bold">{exp.title}</p>
                </div>
                <p className="font-mono" >{exp.description}</p>
              </div>
            ))}
          </div>
          {/* additional content can go here */ }
          <div className="flex  items-center justify-around bg-black text-white p-6 mt-4 rounded-lg">
            <div>
              <Image alt="quotes" src={"./icon/quotes.svg"} width={30} height={30} />
            </div>
            <p>Some statement lol</p>
          </div>
        </div>
      </div>
    </main>
  );
}