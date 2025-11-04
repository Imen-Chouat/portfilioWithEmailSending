import Image from "next/image";
export default function ProjectsPage() {
  const projects = [
    {title:"Cenema Website App",speciality:"fullstack project",image:"/elements/cinemaLog.png"},
    {title:"Embeded Quiz System",speciality:"Backend developement",image:"/elements/quizo.png"},
    {title:"Task Manager Mobile App",speciality:"Mobile app developement",image:"/elements/taskManager.png"},
    {title:"Cinema website",speciality:"UI/UX design",image:"/elements/ui.png"}
  ];
  return (
    <main className="py-5 ">
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
              <div className="">
                <Image alt="the arrow" src={"/icon/age.svg"} width={40} height={40}/>
              </div>
              
            </div>
            <div className="relative w-[250px] h-[175px] overflow-hidden rounded-lg ml-2" >
              <Image alt={project.title} src={project.image}fill className="object-cover"/>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <button className="flex gap-5 items-center justify-between bg-black text-white border-black border-2 px-3 py-1.5 font-bold hover:bg-white  hover:text-black transition-all duration-300">
          <p>Load more</p>
          <div className="bg-gradient-to-r from-orange-300 to-purple-500 p-1 rounded-sm">
            <Image alt="button" src={"/icon/age.svg"} width={20} height={20}/>
          </div>
        </button>
      </div>
      
      
    </main>
  );
}