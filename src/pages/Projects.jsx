import React from "react";
import Navbar from "../components/Navbar"; // Assuming you have a Navbar component

const projects = [
  {
    title: "Project One",
    description: "This is a description of Project One.",
    image: "https://via.placeholder.com/1920x1080", // Replace with your HD image URL
    link: "https://example.com/project-one"
  },
  {
    title: "Project Two",
    description: "This is a description of Project Two.",
    image: "https://via.placeholder.com/1920x1080", // Replace with your HD image URL
    link: "https://example.com/project-two"
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="bg-blue">
      <Navbar />

      {/* Top Section with Background Image */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 100%), url('https://res.cloudinary.com/ryry/image/upload/v1724599173/ry_boi_White_marble_statue_of_a_desk_setup_with_a_closed_macboo_db608350-82ac-4b62-be58-0d69c026a7a1_2_ix52gv.webp')`,
          margin: "0",
          padding: "0"
        }}
      >
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            pointerEvents: "none"
          }}
        />

        <div className="container mx-auto px-4 py-12 relative z-0">
          <section className="h-screen w-full flex items-start pt-[28vh] text-center justify-center">
            <div className="w-full max-w-[50vw] flex flex-col">
              {/* You can add a title or introductory text here if needed */}
            </div>
          </section>
        </div>
      </div>

      {/* Project Chat-Like Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex flex-col space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg overflow-hidden flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-1/2 h-64 object-cover"
              />
              <div className="p-6 w-1/2">
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
