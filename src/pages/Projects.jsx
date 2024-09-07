import React from "react";
import Navbar from "../components/Navbar"; // Assuming you have a Navbar component

const projects = [
  {
    title: "The Pine Marten Bar & Scran",
    description:
      "Developed a multi-page website using Wix, which I designed using Figma and built independently. The primary objective was to increase conversions, resulting in more bookings for the hotel, café, and equipment rental services.    ",
    image:
      "https://res.cloudinary.com/ryry/image/upload/v1724496106/aviemoreski-hero_u4q2ev.webp", // Replace with your HD image URL
    link: "https://www.aviemoreski.co.uk/"
  },
  {
    title: "Tiny Lotto",
    description:
      "I spearheaded the design and development of Tiny Lotto, a unique card-based game featuring individual characters similar to those in Trading Card Games (TCG). My responsibilities included customizing and editing character designs from default stock images to create a distinct visual identity for the game. Additionally, I designed the entire game interface and developed the accompanying website, ensuring a cohesive and engaging user experience from gameplay to web presence.",
    image:
      "https://res.cloudinary.com/ryry/image/upload/v1724673187/Screenshot_2024-08-26_at_12.51.28_g6jvtm.webp", // Replace with your HD image URL
    link: "https://tinylotto.co.uk"
  },
  {
    title: "Munchies on Demand",
    description:
      "I am currently in the design and mid-build phase of my food delivery service, Munchies on Demand, for which I own both the .co.uk and .com domains. The design process has been executed using Figma, Adobe Illustrator, and Photoshop to create a visually compelling and user-friendly interface. The development phase is underway, and the platform is being built with React, Next.js, and deployed via Netlify to ensure a fast, scalable, and seamless user experience.",
    image:
      "https://res.cloudinary.com/ryry/image/upload/v1724673257/munchiesondemand.webp", // Replace with your HD image URL
    link: "https://munchiesondemand.co.uk"
  },
  {
    title: "MMH - Mental health website",
    description:
      "I designed a mental health website using Figma, with the primary goal of fostering community and support through various categories dedicated to different aspects of mental health. The platform is structured to not only provide resources but also to encourage social events and connections among users, helping them find support networks and participate in activities that promote well-being. ",
    image:
      "https://res.cloudinary.com/ryry/image/upload/v1724673737/Screenshot_2024-08-26_at_13.01.46_yc1ot4.webp", // Replace with your HD image URL
    link: "#"
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="bg-blue">
      <Navbar />

      {/* Top Section with Background Image */}
      <div
        className="relative w-full h-[40vh] bg-cover bg-center md:h-[100vh] lg:h-[100vh]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 100%), url('https://res.cloudinary.com/ryry/image/upload/v1724599173/ry_boi_White_marble_statue_of_a_desk_setup_with_a_closed_macboo_db608350-82ac-4b62-be58-0d69c026a7a1_2_ix52gv.webp')`
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
          <section className="h-screen w-full flex items-center pt-[20vh] sm:pt-[28vh] text-center justify-center">
            <div className="w-full max-w-[90vw] sm:max-w-[60vw] md:max-w-[50vw] flex flex-col">
              {/* Add any introductory text or title here */}
            </div>
          </section>
        </div>
      </div>

      {/* Project Section */}
      <section className="py-12 sm:py-16 container mx-auto px-4">
        <div className="flex flex-col space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg h-[50vh] rounded-lg overflow-hidden flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2  object-cover"
              />
              <div className="p-6 w-full md:w-1/2 text-center md:text-left sm:h-full">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
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
