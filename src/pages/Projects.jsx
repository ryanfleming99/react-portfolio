import React from "react";
import Navbar from "../components/Navbar"; // Assuming you have a Navbar component
import ScrollButton from "../components/ScrollButton";

const projects = [
 
  {
    title: "SnapSell",
    description:
      "SnapSell is a seamless, user-friendly platform designed for buying and selling products. Built with ReactJS and Next.js for a fast, responsive front-end, SnapSell leverages Firebase for secure real-time data management and authentication. Powered by the ChatGPT API, it offers smart, AI-driven product descriptions and user assistance, while Typesense ensures lightning-fast search functionality. Styled with Tailwind CSS for a sleek, modern look, and integrated with Google Console for robust analytics and performance tracking, SnapSell simplifies online trading with cutting-edge technology",
    image:
      "https://res.cloudinary.com/ryry/image/upload/v1740404948/snapsell_ppzto8.png", 
    link: "https://snapsell.io",
    tools: ["Photoshop", "Wix", "Figma", "Javascript"]
  },
  {
    title: "Tiny Lotto",
    description:
      "Tiny Lotto is a cutting-edge, Web3-focused platform where users can buy cryptocurrency scratch cards with ease, blending the thrill of lotteries with the power of crypto. Built with ReactJS and Next.js for a smooth, responsive experience, it’s deployed on Netlify for fast, scalable hosting. Integrated with Firebase for secure data and authentication, Tiny Lotto is wallet-ready, enabling seamless crypto transactions. The ChatGPT API powers engaging content and user support, while Typesense delivers rapid search capabilities. Styled with Tailwind CSS for a sleek, modern design and tracked via Google Console for performance insights, Tiny Lotto brings a fresh, crypto-driven twist to online gaming.",
    image:
      "https://res.cloudinary.com/ryry/image/upload/v1740405102/tinylottobackgorund_avhoou.webp", 
    link: "https://tinylotto.co.uk"
  },
  {
    title: "The Pine Marten Bar & Scran",
    description:
      "Developed a multi-page website using Wix, which I designed using Figma and built independently. The primary objective was to increase conversions, resulting in more bookings for the hotel, café, and equipment rental services.    ",
    image:
      "https://res.cloudinary.com/ryry/image/upload/v1724496106/aviemoreski-hero_u4q2ev.webp", 
    link: "https://www.aviemoreski.co.uk/",
    tools: ["Photoshop", "Wix", "Figma", "Javascript"]
  },
  {
    title: "Munchies on Demand",
    description:
      "I am currently in the design and mid-build phase of my food delivery service, Munchies on Demand, for which I own both the .co.uk and .com domains. The design process has been executed using Figma, Adobe Illustrator, and Photoshop to create a visually compelling and user-friendly interface. The development phase is underway, and the platform is being built with React, Next.js, and deployed via Netlify to ensure a fast, scalable, and seamless user experience.",
    image:
      "https://res.cloudinary.com/ryry/image/upload/v1724673257/munchiesondemand.webp", 
    link: "https://munchiesondemand.co.uk"
  },
  {
    title: "MMH - Mens Mental Health Website",
    description:
      "I designed a mental health website using Figma, with the primary goal of fostering community and support through various categories dedicated to different aspects of mental health. The platform is structured to not only provide resources but also to encourage social events and connections among users, helping them find support networks and participate in activities that promote well-being. ",
    image:
      "https://res.cloudinary.com/ryry/image/upload/v1730034835/website%20images/Screenshot_2024-10-27_at_13.10.35_k38vo2.webp", 
    link: "https://mmhw.netlify.app/"
  },
  {
    title: "Public Design Jobs",
    description:
      "A dynamic platform designed to connect and hire freelance designers from diverse creative disciplines, fostering collaboration on innovative projects. The website integrates a charitable component, with donations facilitated through the service, supporting a fully registered charity.      ",
    image:
      "https://res.cloudinary.com/ryry/image/upload/v1740405313/publicdesignjobs_kdeoj9.webp", 
    link: "https://publicdesignjobs.co.uk/"
  },
  {
    title: "Job Scraper Adzuna API",
    description:
      "TopJobScraper is a UK job search site that connects users to job listings via the Adzuna API. Built with React, hosted on Netlify, and powered by Render, it’s a fast and simple way to find and apply for jobs.      ",
    image:
      "https://res.cloudinary.com/ryry/image/upload/v1731334845/Screenshot_2024-11-11_at_14.20.31_unwy5p.png", 
    link: "https://topjobscraper.netlify.app/"
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="bg-blue projectsNav">
      <Navbar />

      {/* Top Section with Background Image */}
      <div
        className="relative w-full h-[40vh] bg-cover bg-center md:h-[100vh] lg:h-[100vh]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 100%), url('https://res.cloudinary.com/ryry/image/upload/v1740406845/pjbg_ist8cr.webp')`
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

        <div className="container mx-auto px-4 relative z-0">
          <section className="h-screen w-full flex pt-[20vh] sm:pt-[0vh] sm:items-center justify-start text-left">
            <div className="w-full max-w-[90vw] sm:max-w-[100vw] items-center mx-auto flex flex-col">
              <h1 className="drop-shadow-md text-white font-bold text-4xl sm:text-4xl md:text-7xl mb-4 -ml-1 sm:-ml-2 text-left md:text-left lg:text-left">
                Featured Projects
              </h1>
              <ScrollButton targetId="projects-section">&#8595;</ScrollButton>
            </div>
          </section>
        </div>
      </div>

      {/* Project Section */}
      <section
        id="projects-section"
        className="py-12 sm:py-16 container mx-auto px-4"
      >
        <div className="flex flex-col space-y-24 ">
          {projects.map((project, index) => (
            <a
              href={project.link}
              className="w-auto h-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                key={index}
                className={` overflow-hidden flex flex-col md:flex-row py-2 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-1/2  object-cover rounded-xl"
                />
                <div className="p-6 w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-xl hover:text-blue-700"
                  >
                    {project.link}
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
