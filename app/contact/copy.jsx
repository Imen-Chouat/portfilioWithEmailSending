'use client';
import { useState , useEffect } from "react";
import Link from "next/link";
import BlackButton from "../component/blackButton";
export default function ContactPage() {
  const [phoneNumber , setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [loading,setLoading] = useState(false);
  const [formData,setFormData] =useState({
    name: "",
    email: "",
    message: "",
    attachment: null,
  });
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

  const handleChange = (e) => {
    const {name , value} = e.target ;
    setFormData((prev)=>({
      ...prev ,
      [name]:value ,
    }));
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
    <main className="flex justify-center items-cemter my-20 p-4 h-full max-h-[400px]">
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
      
      <div className="bg-gradient-to-r from-purple-500 to-orange-300 p-15 w-3/4 max-h-[400px]">
        <h1 className="font-bold font-mono text-3xl text-white mb-5">ANY PROJECT ?</h1>

        <div className="max-w-4xl mx-auto bg-gray-800 p-8 md:p-12 rounded-lg shadow-2xl">
            <form onSubmit={handleubmit} className="space-y-6">
            
            {/* Name and Email in one row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition duration-150"
                required
                />
                <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition duration-150"
                required
                />
            </div>

            {/* Subject Field */}
            <input
                type="text"
                name="subject"
                placeholder="SUBJECT"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition duration-150"
                required
            />

            {/* Message Textarea */}
            <textarea
                name="message"
                placeholder="MESSAGE"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition duration-150 resize-none"
                required
            />

            {/* Submit Button - Styled to mimic the dark/black look */}
            <button
                type="submit"
                className="w-full py-4 text-lg font-semibold uppercase tracking-widest bg-black text-white rounded-md hover:bg-gray-900 transition duration-300"
            >
                {loading ? "SENDING...":"SEND MESSAGE"}
            </button>
            </form>
        </div>
        <BlackButton text={"now"} onclick={()=>{}}/>
      </div> 
    </main>
  );
}