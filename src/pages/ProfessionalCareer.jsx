import React from "react";
import Navbar from "../components/Navbar"; // Assuming you have a Navbar component

const experiences = [
  {
    role: "Senior Marketing CRO Developer",
    company: "ClassPass",
    duration: "April 2023 - Present",
    description: [
      "Executed and managed CRO experiments using Optimizely, leveraging JavaScript, HTML, and CSS to optimize web features and improve performance.",
      "Conducted thorough quality assurance testing across multiple devices and browsers to ensure a consistent and seamless user experience",
      "Led the complete redevelopment of corporate and partner websites, significantly enhancing functionality and user experience.",
      "Monitored web analytics using Google Analytics to evaluate the effectiveness of experiments and provide actionable insights.",
      "Implemented a fully restructured blog using HubSpot's modular system, improving structure, maintainability, and customization.",
      "Managed multiple marketing campaigns simultaneously, ensuring consistent messaging and alignment with overall business objectives across various channels."
    ],
    logo:
      "https://res.cloudinary.com/ryry/image/upload/v1724675895/New_Project_7_ymrhtz.webp"
  },
  {
    role: "Front End Developer",
    company: "Marketopia",
    duration: "Jan 2022 - Present",
    description: [
      "Designed and developed visually engaging websites using Hubspot CMS, WordPress, Webflow, and Wix.",
      "Enhanced website performance and visibility through SEO optimization, utilizing tools like SEMrush, Google Search Console, and PageSpeed Insights.",
      "Collaborated with project managers, design teams, and clients to consistently deliver comprehensive websites.",
      "Conducted daily quality assurance, strategic planning, and project management to ensure optimal outcomes.",
      "Facilitated monthly training sessions to upskill colleagues in web development, email design, Adobe software, and QA testing."
    ],
    logo:
      "https://res.cloudinary.com/ryry/image/upload/v1724496110/marketopia-logo_qoo5iu.webp"
  },
  {
    role: "Front End Developer",
    company: "InvestCloud",
    duration: "Feb 2020 - Jan 2022 · 2 yrs",
    description: [
      "Developed financial web portals for wealth management clients using proprietary software and Azure DevOps Server.",
      "Translated InVision designs into functional, responsive HTML and CSS layouts.",
      "Managed daily bug fixes, functional wiring, and provided consistent feedback on client websites."
    ],
    logo:
      "https://res.cloudinary.com/ryry/image/upload/v1724496110/investcloud-logo_ggyamx.webp"
  },
  {
    role: "Marketing Technologist",
    company: "Notonthehighstreet",
    duration: "Aug 2017 - Jul 2019 · 2 yrs",
    description: [
      "Coded and programmed emails using HTML, CSS, JavaScript, and Node.js.",
      "Updated and developed Node.js applications via GitHub, both online and through the Mac terminal.",
      "Met strict deadlines for multiple daily email campaigns.",
      "Collaborated with various teams on briefs, creatives, copy, finance, and ideas.",
      "Volunteered for extra responsibilities, including CMS updates, deletions, and WordPress web work.",
      "Utilized Google Analytics, e-commerce tools, and personalized content for digital marketing.",
      "Dedicated weekly personal development time to enhance skills in JavaScript, React.js, email design, and Adobe Suite."
    ],
    logo:
      "https://res.cloudinary.com/ryry/image/upload/v1724496112/notonthehighstreet_l4h2qz.webp"
  },
  {
    role: "Co Founder",
    company: "Tutor Bubble",
    duration: "Jun 2016 - Aug 2017 · 1 yr 3 mos",
    description: [
      "Established an online tutoring agency connecting students with professionally qualified teachers.",
      "Led brand design, including logo creation, website content, and social media posts.",
      "Ensured compliance with legal requirements through best business practices.",
      "Managed daily deadlines for social, PR, and email campaigns to maximize channel traffic."
    ],
    logo:
      "https://res.cloudinary.com/ryry/image/upload/v1724496299/tutor-bubble-logo_vclv24.webp"
  },
  {
    role: "Campaign Manager",
    company: "Yielify",
    duration: "Apr 2017 - Jul 2017 · 4 mos",
    description: [
      "Developed email and web campaigns for multiple brands, focusing on increasing revenue, TTV, and key email metrics.",
      "Created and managed campaigns for major brands while advising on e-commerce pop-ups to maximize ROI.",
      "Collaborated with account managers to ensure consistency across multiple campaigns on-site and in email."
    ],
    logo:
      "https://res.cloudinary.com/ryry/image/upload/v1724496392/yielify-logo_ea6osp.webp"
  },
  {
    role: "Travelling",
    company: "",
    duration: "Aug 2015 - June 2017",
    description: [
      "Traveled through Amsterdam, Australia, Bali, Cambodia, Germany, Indonesia, Singapore, Thailand, and Vietnam.",
      "Worked as an avocado picker/pruner for an Australian Regional Visa."
    ],
    logo:
      "https://res.cloudinary.com/ryry/image/upload/v1724496428/travelling-logo_chrmi7.webp"
  },
  {
    role: "Customer Service Officer",
    company: "Merlin Entertainment",
    duration: "Dec 2015 - Mar 2016 · 4 mos",
    description: [
      "Exceeded sales targets while developing creative ideas for customer entertainment.",
      "Managed and organized cash, tickets, and promotions.",
      "Provided extra support during peak periods such as Christmas and school holidays.",
      "Worked efficiently in a fast-paced environment with a strong team focus."
    ],
    logo:
      "https://res.cloudinary.com/ryry/image/upload/v1724496469/merlin-logo_cv9wqp.webp"
  },
  {
    role: "Kitchen Chef/Barista",
    company: "Starbucks",
    duration: "Sep 2014 - Jul 2015 · 11 mos",
    description: [
      "Maintained Starbucks' high standards in food preparation and customer service.",
      "Handled customer transactions while fostering a positive atmosphere.",
      "Ensured compliance with health and safety regulations through meticulous hygiene practices.",
      "Provided exceptional service at events, including alcohol service and food preparation."
    ],
    logo:
      "https://res.cloudinary.com/ryry/image/upload/v1724496112/starbucks-logo_hqq119.webp"
  },
  {
    role: "Host",
    company: "Byron",
    duration: "Nov 2013 - Jul 2014 · 9 mos",
    description: [
      "Welcomed and entertained guests in the world's largest ticket-selling arena.",
      "Served 100+ international customers daily.",
      "Resolved issues with orders and customer concerns while maintaining a positive environment.",
      "Earned certification in chemical, food, and health safety."
    ],
    logo:
      "https://res.cloudinary.com/ryry/image/upload/v1724496106/byron-logo_lmvpjo.webp"
  },
  {
    role: "Social Media Specialist",
    company: "Violet Darkling",
    duration: "",
    description: [
      "Maintained and enhanced brand presence across all social channels to boost awareness, revenue, and customer acquisition.",
      "Collaborated with the design team to improve content for both the website and social media.",
      "Reported brand progress to stakeholders regularly."
    ],
    logo:
      "https://res.cloudinary.com/ryry/image/upload/v1724496525/violetdarkling_fgwibm.webp"
  },
  {
    role: "Bachelor's Degree, Digital Multimedia Technology",
    company: "University",
    duration: "July 2012 - July 2015",
    description: [
      "Gained theoretical knowledge and practical skills in designing, constructing, and developing digital media applications.",
      "Studied visual design, animation, creative thinking, and interface design.",
      "Learned webpage design and development using HTML, CSS, and JavaScript.",
      "Engaged in technical product planning and implementation using single-board computers."
    ],
    logo:
      "https://res.cloudinary.com/ryry/image/upload/v1724496605/greenwich_kq1k9a.png"
  },
  {
    role: "Computer Aided Drafting and Design",
    company: "Adam Smith College",
    duration: "2010 - 2011",
    description: [
      "Created designs and schematics in software for product manufacturing.",
      "Worked on 3D surface and solid modeling projects.",
      "Studied architectural CAD principles and practices.",
      "Learned and applied design methodology."
    ],
    logo:
      "https://res.cloudinary.com/ryry/image/upload/v1724496678/education-emblem-with-book-and-graduation-cap_zqgikc.jpg"
  },
  {
    role: "Social Media",
    company: "",
    duration: "2008 - 2011",
    description: [
      "Built and maintained a social media following of over 500,000.",
      "Edited, created, and updated social posts using Adobe Photoshop.",
      "Sourced brands and products for affiliate marketing."
    ],
    logo:
      "https://res.cloudinary.com/ryry/image/upload/t_a/v1724496753/Black-Icons-widget-template-to-embed_mszf7b.webp"
  },
  {
    role: "Portable Salesman",
    company: "",
    duration: "2007 - 2008",
    description: [
      "Focused on customer retention and providing unique products.",
      "Managed stock and ensured quality control.",
      "Sourced and delivered goods efficiently."
    ],
    logo:
      "https://res.cloudinary.com/ryry/image/upload/v1724496824/RyanFlemingAvatar_d5hwo0.webp"
  }
];

const WhatIDo = () => {
  return (
    <div className="bg-blue">
      <Navbar />

      <div
        className="relative w-full h-screen bg-cover bg-top"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 1) 100%),  url('https://res.cloudinary.com/ryry/image/upload/v1731330960/projects-backgrounds_zdqnqi.jpg')`
        }}
      >
        <div className="container px-8 sm:px-24 py-12 relative z-0">
          <section className="h-screen w-full flex items-start sm:items-center md:items-start  text-left pt-[15vh] sm:pt-[30vh] sm:pt-[25vh]">
            <div className="w-full max-w-[95vw] sm:max-w-[60vw] md:max-w-[50vw] flex flex-col text-center sm:text-left">
              <h1 className="drop-shadow-md text-white font-bold text-4xl sm:text-4xl md:text-7xl mb-4 -ml-1 sm:-ml-2 text-center md:text-left lg:text-left">
                Professional Career
              </h1>
              <p className="text-md text-md sm:text-md p-0 md:max-w-[38vw] sm:text-gray-400 text-gray-400 ">
                I'm passionate about working with React, Node.js, Contentful,
                Tailwind, HTML, CSS, and Optimizely. I also enjoy leveraging
                tools like BrowserStack, Figma, Photoshop, HubSpot, GA4,
                SEMrush, Wix, WordPress, and many others.
              </p>
            </div>
          </section>

          <section className="py-12 sm:py-16 flex flex-col">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start mb-16 md:mb-24"
              >
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8 max-w-[100px] sm:max-w-[120px] md:max-w-[150px] min-w-[100px] sm:min-w-[120px] md:min-w-[150px]">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-auto h-12 sm:h-14 md:h-16 mx-auto md:mx-0"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">
                    {exp.duration}
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 pl-4">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
