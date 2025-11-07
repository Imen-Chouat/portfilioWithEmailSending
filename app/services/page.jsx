'use client';
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function ServicesPage() {
  const [selected,setSelected] = useState(null);
  const services = [
    { title: 'Web Development', description: 'Building responsive and dynamic websites using modern technologies.' ,image:"",technologies:["React","NextJS","MySQL"],skills:[],},
    { title: 'Mobile App Development', description: 'Creating user-friendly mobile applications for iOS and Android platforms.' ,image:"",technologies:["React Native","Expo","SQLlite"],skills:["Real-time data synchronization","Notifications","Cross-platform compatibility",] },
    { title: 'UI/UX Design', description: 'Designing intuitive user interfaces and enhancing user experience.' ,image:"",technologies:["Figma"],skills:["Prototyping","Visual Design"," Interaction Flow"] },
    { title: 'Backend Development', description: 'Developing robust server-side applications and APIs.' ,image:"",technologies:["NodeJS","Express","Flask","MySQL"],skills:[] },
  ];
  return (
    <main className="flex flex-col px-10 ">
      <div className="flex flex-col mt-5 mb-10" >
        <p className="italic text-gray-700 font-bold">service</p>
        <h1 className="text-4xl font-mono font-bold mt-2">MY SPECIALTIES</h1>
      </div>
      <div>
        {services.map((service, index) => (
          <div key={index} className="flex-cols justify-between py-8 border-b-2 border-gray-200 min-h-[50px]" >
            <div className="flex justify-between w-full" >
              <div>
                <p className={selected === index ? "bg-clip-text font-black text-transparent text-2xl bg-gradient-to-r from-purple-500 to-orange-500" : "font-black text-2xl "}>{service.title}</p>
              </div>
              <div>
                <p className=" cursor-pointer text-4xl" onClick={() => setSelected(selected == index ? null : index)}>              {
                  selected == index ? "-" : "+"
                }</p>
              </div>
            </div>
            <div>
              {
                selected === index ? 
                <div className="flex-cols space-y-2 items-center mb-4 text-xl font-black border-l-4 border-purple-500 to-orange-500  pl-4 mt-4">
                    <p>Technologies :<span className="font-bold">{service.technologies.join(" ,")}</span> </p>
                    <p>Skills :<span className="font-bold">{service.skills.join(" ,")}</span> </p>
                    <p>Description : <span className="font-bold">{service.description}</span></p> 
                </div>
                :
                <div></div>
                
              }
              
            </div>
          </div>
        ))}

      </div>
    </main>
  );
}