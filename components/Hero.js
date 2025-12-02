import Image from "next/image";

export default function Hero() {
  return (
   <section className="min-h-screen p-6 md:ml-64 md:p-12 bg-gradient-to-br from-red-100 via-blue-100 to-green-200">>

      
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-32">
        
        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2 gap-3">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            MY NAME IS MANISH KUMAR RATHORE
          </h1>

          <p className="text-lg mt-4">
            <span className="font-bold">Full Stack developer Intern</span> based in <i>India</i>
          </p>

          <a href="/contact" target="_blank" rel="noopener noreferrer">
  <button className="bg-black text-white px-6 py-3 mt-6">
    Let’s talk with me
  </button>
</a>

          <div className="pt-6 space-y-1 text-gray-700">
            <p>7697119440</p>
            <p>manishrathore2505@gmail.com</p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
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
