'use client';
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function ServicesPage() {
  const [selected,setSelected] = useState(null);
  const services = [
    { title: 'Web Development', description: 'Building responsive and dynamic websites using modern technologies.' ,image:""},
    { title: 'Mobile App Development', description: 'Creating user-friendly mobile applications for iOS and Android platforms.' ,image:""},
    { title: 'UI/UX Design', description: 'Designing intuitive user interfaces and enhancing user experience.' ,image:"" },
    { title: 'Backend Development', description: 'Developing robust server-side applications and APIs.' ,image:"" },
  ];
  return (
    <main className="flex flex-col px-10 ">
      <div className="flex flex-col mt-5 mb-10" >
        <p className="italic text-gray-700 font-bold">service</p>
        <h1 className="text-4xl font-mono font-bold mt-2">MY SPECIALTIES</h1>
      </div>
      <div>
        {services.map((service, index) => (
          <div key={index} className="flex justify-between mb-6 border-b-2 border-gray-200 min-h-[100px]" >
            <div>
              <p className={selected === index ? "bg-clip-text font-black text-transparent text-2xl bg-gradient-to-r from-purple-500 to-orange-500" : "font-black text-2xl "}>{service.title}</p>
            </div>
            <div>
              {
                selected === index ? 
                <div className="flex space-x-4 items-center">
                  <div>

                    <span>{service.description}</span> 
                  </div>
                  
                  <span className=" cursor-pointer text-4xl" onClick={() => setSelected(null)}>-</span>
                </div>
                :
                <span className="cursor-pointer text-4xl" onClick={() => setSelected(index)}>+</span> 
                
              }
              
            </div>
          </div>
        ))}

      </div>
    </main>
  );
}