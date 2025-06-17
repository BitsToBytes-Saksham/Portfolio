import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "File Conversion Tool",
    description:
      "A robust client-server application using Python and a custom-designed GUI. Supports file encryption, decryption, PDF conversion, and more using sockets and a clean Tkinter interface.",
    image: "/projects/project1.png",
    tags: ["Python", "Tkinter", "PDF", "Socket"],
    demoUrl: null,
    githubUrl:
      "https://github.com/BitsToBytes-Saksham/File-Conversion-Tool",
  },
  {
    id: 2,
    title: "Code Compiler",
    description:
      "A modern code compiler built using React and Monaco Editor with Docker integration. It allows real-time code execution in a secure containerized environment for multiple languages.",
    image: "/projects/project2.png",
    tags: ["React", "JavaScript", "Compiler", "Monaco"],
    demoUrl: null,
    githubUrl: "https://github.com/BitsToBytes-Saksham/code-compiler",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Featured <span className="text-purple-400">Projects</span>
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A showcase of my recent work and creative solutions.
        </p>

        <div className="flex flex-col gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="bg-gradient-to-br from-[#0e0d1b] to-[#16172a] rounded-2xl shadow-lg border border-purple-900 hover:shadow-purple-700 transition-all duration-300"
            >
              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-purple-900 text-purple-300 px-3 py-1 text-xs rounded-full tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>

                <div className="flex justify-start items-center gap-4 mt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span>Live View</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="bg-purple-700 hover:bg-purple-600 text-white font-medium rounded-full px-6 py-2 flex items-center gap-2 justify-center transition"
            target="_blank"
            href="https://github.com/BitsToBytes-Saksham"
          >
            View All Projects <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
