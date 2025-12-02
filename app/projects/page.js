import projectsData from '../../data/projects.json';
export default function Projects() {
  return (
    <section className="min-h-screen p-6 md:ml-64 md:p-12 bg-gradient-to-br from-red-300 via-blue-500 to-green-400">

      <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text animate-typing">
        Projects
      </h1>

      {/* PROJECT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projectsData.projects.map((project) => (
          <div key={project.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition relative projectcard">

            <h2 className="text-xl font-bold">{project.name}</h2>
            <p className="text-sm text-gray-500 mb-2">
              Status: <span className="font-semibold">{project.status}</span>
            </p>

            <p className="text-gray-700 mb-3">{project.description}</p>

            <p className="text-sm font-semibold mb-2">Tech Stack:</p>
            <div className="flex flex-wrap gap-2">
              {project.techstack.map((tech, i) => (
                <span key={i}
                  className="px-3 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
