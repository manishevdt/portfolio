"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });

const handleSubmit = async (e) => {
  e.preventDefault();

  const fd = new FormData();
  fd.append("name", form.name);
  fd.append("email", form.email);
  fd.append("message", form.message);
  if (form.file) fd.append("file", form.file);

  const res = await fetch("/api/sendmail", {
    method: "POST",
    body: fd,   
  });

  const data = await res.json();
  if(res.ok){
      toast.success(data.message||"You send me mail has successed");
  } else {
    toast.error( data.error|| "Something went wrong! ");
  }

};



  

  return (
    <section className="min-h-screen p-6 md:ml-64 md:p-12 bg-gradient-to-br from-red-300 via-blue-500 to-green-400">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text animate-typing">
        CONTACT ME
      </h1>

      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-10 rounded-2xl w-full max-w-2xl mt-6">
        <h2 className="text-3xl font-bold text-white mb-6">Contact Form</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="NAME"
                value={form.name}
              className="bg-transparent border-b border-white text-white p-2 outline-none"
              onChange={(e) => setform({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="EMAIL"
                value={form.email}
              className="bg-transparent border-b border-white text-white p-2 outline-none"
              onChange={(e) => setform({ ...form, email: e.target.value })}
            />
          </div>

      <textarea
  value={form.message}
  onChange={(e) => setform({ ...form, message: e.target.value })}
  className="bg-transparent border-b border-white text-white p-2 outline-none w-full h-32"
>
</textarea>
          <div className="text-white flex items-center gap-3">
            <span>ATTACH FILE</span>
            <input
              type="file"
              className="text-white"
              onChange={(e) =>
                setform({ ...form, file: e.target.files[0] })
              }
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-2 hover:opacity-80"
          >
            Send Mail
          </button>
        </form>
      </div>
    </section>
  );
}
