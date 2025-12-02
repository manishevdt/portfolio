import skillsData from '../../data/skills.json';
import Image from "next/image";

export default function Skills() {
  return (
    <section className="min-h-screen p-6 md:ml-64 md:p-12 bg-gradient-to-br from-red-300 via-blue-500 to-green-400">

      <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text animate-typing">
        Skills
      </h1>

      {skillsData.skills.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {category.items.map((skill, i) => (
              <div
                key={i}
                className="p-5 bg-white/20 backdrop-blur-lg border border-white/30 
                           rounded-xl flex flex-col items-center justify-center 
                           hover:bg-white/30 transition"
              >
                <Image
                  src={skill.image}
                  width={60}
                  height={60}
                  alt={skill.name}
                  className="rounded-lg"
                />
                <p className="mt-3 text-lg text-white">{skill.name}</p>
              </div>
            ))}

          </div>
        </div>
      ))}

    </section>
  );
}
