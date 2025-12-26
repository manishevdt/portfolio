import Image from "next/image";

export default function Hero() {
  return (
   <section className=" hero-bg w-full min-h-screen  flex items-center justify-center px-4 md:px-10">

      
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-32">
        
      
        <div className="w-full md:w-1/2 gap-12">
          <h1 className="text-fade text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text animate-typing">
            MY NAME IS MANISH KUMAR RATHORE
          </h1>

          <p className="text-lg mt-4">
            <span className="font-bold">Full Stack developer Intern</span> based in <i>India</i>
          </p>

          <a href="/contact" target="_blank" rel="noopener noreferrer">
<button className="bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:via-red-500 hover:to-blue-500 text-white px-6 py-3 mt-6 transition duration-500">
  Let’s talk with me
</button>

</a>

          <div className="pt-6 space-y-1 text-green-900  ">
            <p>7697119440</p>
            <p>manishrathore2505@gmail.com</p>
          </div>
        </div>

     
        <div className="w-full md:w-1/2 flex justify-center relative">
          <Image
            src="/MyImage/resumeimage-removebg-preview.png"
            alt="Manish"
            width={480}
            height={480}
            className="object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
