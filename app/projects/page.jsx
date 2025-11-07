"use client";
import Image from "next/image";
import { useState } from "react";
export default function ProjectsPage() {
  const [visibleModal , setVisibility] = useState(null);
  const [testIndex,setTestIndex]= useState(0);
  const openModal = (e) => setVisibility(e);
  const closeMadal = () => setVisibility(null);
  const projects = [
    {title:"Cenema Website App",speciality:"fullstack project",image:"/elements/cinemaLog.png",description:"just random description and all .",technologies:["React","NextJS","MySQL"],url:"https://github.com/Imen-Chouat/Cinema_App"},
    {title:"Embeded Quiz System",speciality:"Backend developement",image:"/elements/quizo.png",description:"just random description and all .",technologies:["React","NextJS","MySQL"],url:"https://github.com/Imen-Chouat/embedded-quiz-system"},
    {title:"Task Manager Mobile App",speciality:"Mobile app developement",image:"/elements/taskManager.png",description:"just random description and all .",technologies:["React","NextJS","MySQL"],url:"https://github.com/Imen-Chouat/TaskManagerAppOFFLINE"},
    {title:"Cinema website",speciality:"UI/UX design",image:"/elements/ui.png",description:"just random description and all .",technologies:["React","NextJS","MySQL"],url:"https://github.com"},
  ];
const testimonials = [
  {
    auther: "Sarah Johnson",
    position: "Marketing Director at TechCorp",
    quote: "This service completely transformed our workflow. The efficiency gains we've experienced are remarkable and our team has never been more productive."
  },
  {
    auther: "Michael Chen",
    position: "Software Engineer",
    quote: "Outstanding support and incredible features. It's rare to find a tool that's both powerful and intuitive to use."
  },
  {
    auther: "Emily Rodriguez",
    position: "Freelance Designer",
    quote: "As a freelancer, this has been a game-changer for managing my projects and communicating with clients seamlessly."
  },
  {
    auther: "David Thompson",
    position: "Startup Founder",
    quote: "The ROI was evident within the first month. This platform scaled perfectly with our growing business needs."
  }
];
  return (
    <main className="flex flex-col items-center justify-center py-5 ">
      <div>
        <p className="italic font-bold text-sm">work</p>
        <h1 className="font-mono font-black text-3xl">Recent Projects</h1>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-6" >
        {projects.map((project,index)=>(
          <div key={index} className="font-mono  p-2 flex justify-between space-x-2">
            <div className="h-full flex flex-col justify-between font-bold max-w-[190px] " >
              <p className="">{project.speciality}</p>
              <p className=" text-2xl font-black my-2">{project.title}</p>
              <div className="cursor-pointer" onClick={()=>openModal(project)} >
                <Image alt="the arrow" src={"/icon/flash.svg"} width={30} height={30}/>
              </div>
            </div>
            <div className="relative w-[250px] h-[175px] overflow-hidden rounded-lg ml-2" >
              <Image alt={project.title} src={project.image}fill className="object-cover"/>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="flex gap-5 items-center justify-between bg-black text-white border-black border-2 px-3 py-1.5 font-bold hover:bg-white  hover:text-black transition-all duration-300">
          <p>Load more</p>
          <div className="bg-gradient-to-r from-orange-300 to-purple-500 p-1 rounded-sm">
            <Image alt="button" src={"/icon/flash.svg"} width={20} height={20}/>
          </div>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center max-h-120 bg-gradient-to-r from-purple-500 to-orange-500 mt-5 p-10 max-w-2/3 text-white font-bold" >
        <div className=" mb-10">
          <p className="italic font-bold text-center text-sm">Testimonial</p>
          <p className="font-black text-3xl text-center" >What they says</p>
        </div>
        <div>
          <div className="text-2xl italic mb-3">
            <p>{testimonials[testIndex].quote}</p>
          </div>
          <div className="ml-4 text-[11px]">
            <p className="text-[15px] ">-<span>{testimonials[testIndex].auther}</span></p>
            <p className=" text-white-100 -mt-1">{testimonials[testIndex].position}</p>
          </div>
        </div>
        <div className="flex mt-10 space-x-2">
          <div className="flex justify-center items-center bg-white w-10 h-10 p-2 rounded-full"
          onClick={()=>{
            if(testIndex - 1 >= 0)setTestIndex(testIndex-1);
            else{setTestIndex(testimonials.length -1)}
          }}>
            <Image alt="left" src={"/icon/left.svg"} width={20} height={20}/>
          </div>
          <div className="flex justify-center items-center bg-white w-10 h-10 p-2 rounded-full" onClick={()=>{
            if(testIndex+ 1 < testimonials.length)setTestIndex(testIndex+1);
            else{setTestIndex(0)}
          }}>
            <Image alt="right" src={"/icon/right.svg"} width={20} height={20}/>
          </div>
        </div>
      </div>
      { visibleModal && (
      <div className=" fixed inset-0 top-0 w-full h-full flex items-center justify-center bg-black/50 z-50" >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Project Info</h2>
            <button 
              onClick={closeMadal}
              className="px-1 text-purple-500 cursor-pointer font-bold border-2 border-purple hover:text-white-700 hover:bg-purple"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="self-center font-black text-2xl bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent "><span>{visibleModal.title}</span></p>
            <div className="self-center rounded-lg" >
              <Image alt="project image" src={visibleModal.image} width={300} height={300}/>
            </div>
            <div className="font-[600]">
              <p>Speciality : <span>{visibleModal.speciality}</span></p>
              <p>Technologies : <span>{visibleModal.technologies.join(" ,")}</span></p>
              <p>Description : </p>
              <p>{visibleModal.description}</p> 
            </div>
            <div className="bg-black flex gap-4 px-3 py-2 text-white text-md font-bold max-w-[200px] self-center cursor-pointer hover:text-yellow-200 border-2 border-black transition-all duration-300" onClick={()=>window.open(visibleModal.url, "_blank")}>
              <div>
                <p>View Project</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-orange-500 p-2" >
                <Image alt="flash icon" src={"/icon/flash.svg"} height={10} width={10}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      
    </main>
  );
}