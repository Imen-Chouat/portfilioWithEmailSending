'use client';
import { useState , useEffect } from "react";
import Link from "next/link";
import BlackButton from "../component/blackButton";
export default function ContactPage() {
  const [phoneNumber , setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [loading ,setLoading] =useState(false);
  useEffect(() => {
    const storedPhone = localStorage.getItem("phone") || "+213775182696";
    const storedEmail = localStorage.getItem("email") || "1imenchouat@gmail.com";
    setPhoneNumber(storedPhone);
    setEmailAddress(storedEmail);
    localStorage.setItem("phone", storedPhone);
    localStorage.setItem("email", storedEmail);
  }, []);
  const links = [
    {name:"INSTAGRAM" , url:"https://www.instagram.com/"},
    {name:"FACEBOOK" , url:"https://www.facebook.com/"},
    {name:"LINKEDIN" , url:"https://linkedin.com"},
    {name:"DISCORD" , url:"https://discord.com"}
  ];
  const [formData,setFormData] =useState({
    name: "",
    email: "",
    message: "",
    attachment: null,
  });
  const handleChange = (e) => {
    const {name , value} = e.target ;
    setFormData((prev)=>({
      ...prev ,
      [name]:value ,
    }));
  }
  const handleFileChange = (e) =>{
    setFormData((prev)=>({
      ...prev,
      attachment: e.target.files ? e.target.files[0] : null
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append('name',formData.name);
    data.append('email',formData.email);
    data.append('message',formData.message);
    if(formData.attachment){
      data.append('attachement',formData.attachment);
    }
    console.log("Submitting form data:", formData);
    // the api request 
    try {
      const res = await fetch("/api/contact-send",{
        method:'POST',
        body: data 
      });
      if(res.ok){
        alert('Email sent successfully!');
        setLoading(false);
        setFormData({"name":"",'email':"",'message':"",'attachment':null});
      }else{
        alert('Failed to send Email!');
      }

    } catch (error) {
      console.error("Error sending the email",error);
    }
  }

  // Handler for form submission
  const handleubmit = async (e) => {
    e.preventDefault();
    // In a real Next.js app, you would fetch() to an API Route here (e.g., /api/contact)
    console.log('Form Submitted:', formData);

    // Example of a successful submission:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     alert('Message sent successfully!');
    //     setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    //   } else {
    //     alert('Failed to send message.');
    //   }
    // } catch (error) {
    //   console.error(error);
    //   alert('An error occurred. Please try again.');
    // }
  };

  return (
    <main className="flex justify-center items-cemter my-20 p-4 h-full max-h-[450px]">
      <div className=" relative flex-cols justify-center ">
        <div>
          <p className="italic font-bold">contact</p>
          <h1 className="font-bold font-mono text-4xl my-4">REACH OUT TO ME</h1>
          <p className="mt-7">10st Abd EL Aziz Al Soud, 05th Floor, Manial,Roda, Cairo, Egyp</p>
        </div>

        <div className="absolute top-[60%] font-black text-2xl ">
          <p>{phoneNumber}</p>
          <p>{emailAddress}</p>
        </div>

        <div className=" absolute flex gap-4 bottom-5">
          {links.map((link,index)=>(
            <div key={index}>
              <Link href={link.url} className="hover:text-orange-500 transition-all duration-200">
                <p className="text-xs font-black">{link.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <div className=" bg-gradient-to-r from-purple-500 to-orange-300 p-15 w-3/4 ">
        <h1 className="font-bold font-mono text-3xl text-white mb-5">ANY PROJECT ?</h1>
        
        <form onSubmit={handleSubmit} className="flex-cols">
        <div className="flex gap-2 mb-5">
          <input type="text" name="name" placeholder="NAME" value={formData.name} onChange={handleChange} className="border-b-1 text-sm border-white p-1 focus:outline-none text-white font-bold" />
          <input type="text" name="email" onChange={handleChange} placeholder="EMAIL" value={formData.email} className="border-b-1 text-sm border-white p-1 text-white font-bold focus:outline-none"  />
        </div>
        <div>
          <p className="text-white text-sm mb-5">MESSAGE</p>
          <textarea name="message" rows={4} value={formData.message} placeholder="enter your message" onChange={handleChange} className="w-full max-h-[150px] p-2 mb-1 text-sm focus:outline-none text-white bg-transparent border-1 rounded-sm border-white" />
        </div>
        {/* file attachement process */}
        <div>
          <input type="file" name="attachement" onChange={handleFileChange} className=""/>
        </div>
        <button
            type="submit"
            className="px-5 py-2 text-xs font-thick uppercase tracking-widest bg-black text-white hover:bg-gray-900 transition duration-300 self-center mt-3"
        >
            {loading ? "SENDING...":"SEND MESSAGE"}
        </button>
        </form>
        
      </div> 
    </main>
  );
}