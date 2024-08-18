import React from "react";
import Navbar from "../components/Navbar"; // Assuming you have a Navbar component

const experiences = [
  {
    role: "Front End Developer",
    company: "Marketopia",
    duration: "Jan 2022 - Present",
    description: [
      "Creating beautiful websites using Hubspot CMS, Wordpress, Webflow & Wix",
      "Optimising websites using SEO tools such as SEMrush, Google Search Console & pagespeed.web.dev",
      "Partnering with project managers, design teams and clients to regularly deliver 40 page websites",
      "Daily quality assurance, planning and strategy",
      "Up-skilling colleagues monthly using my expertise (email/web development, adobe software, QA testing)"
    ],
    logo: "/images/marketopia-logo.webp"
  },
  {
    role: "Front End Developer",
    company: "InvestCloud",
    duration: "Feb 2020 - Jan 2022 · 2 yrs",
    description: [
      "Building financial web portals for wealth management clients using proprietary software and Azure DevOps Server for project management",
      "Replicating InVision website designs with HTML & CSS",
      "Daily bug fixing for client websites, functional wiring and daily feedback on products"
    ],
    logo: "/images/investcloud-logo.webp"
  },
  {
    role: "Marketing Technologist",
    company: "Notonthehighstreet",
    duration: "Aug 2017 - Jul 2019 · 2 yrs",
    description: [
      "Email Developer role coding/programming with HTML, CSS, Javascript and Node.js",
      "Using Github online and via mac terminal, updating and developing a node.js application",
      "Meeting strict deadline dates for multiple email campaigns daily",
      "Working with multiple teams simultaneously for briefs, creatives, copy, finance and ideas",
      "Volunteering - Taking on extra responsibility for other departments e.g email, cms updates and deletions, Wordpress web work",
      "Working with Google Analytics, E-commerce tools & data as well as personalisation, email service providers and dynamic content for digital marketing",
      "The weekly personal development time used for technology/marketing interests such as JavaScript, React.js, Email Design and Adobe Suite"
    ],
    logo: "/images/notonthehighstreet.webp"
  },
  {
    role: "Co Founder",
    company: "Tutor Bubble",
    duration: "Jun 2016 - Aug 2017 · 1 yr 3 mos",
    description: [
      "Online tutoring agency aimed at easing the process for tutoring the young with professionally qualified government teachers",
      "Leading the brand design from logo, website PR content and social posts",
      "Following best business practices for ensuring legal requirements were met during business operations",
      "Meeting daily deadlines for social, PR and email campaigns to maximise traffic in all channels"
    ],
    logo: "/images/tutor-bubble-logo.webp"
  },
  {
    role: "Campaign Manager",
    company: "Yielify",
    duration: "Apr 2017 - Jul 2017 · 4 mos",
    description: [
      "Email and web development for multiple brands focused on increasing revenue, TTV and typical email KPI’s such as opens, clicks and conversions.",
      "Developing campaigns for big brands while advising on e-commerce pop-ups to maximise ROI",
      "Collaborating with account managers from both brand, product and design to ensure consistency through-out multiple campaigns on-site and in email"
    ],
    logo: "/images/yielify-logo.webp"
  },
  {
    role: "Travelling",
    company: "",
    duration: "Aug 2015 - June 2017",
    description: [
      "Amsterdam, Australia, Bali, Cambodia, Germany, Indonesia, Singapore, Thailand, Vietnam",
      "Avocado Picker/Pruner for Australian Regional Visa"
    ],
    logo: "/images/travelling-logo.webp"
  },
  {
    role: "Customer Service Officer",
    company: "Merlin Entertainment",
    duration: "Dec 2015 - Mar 2016 · 4 mos",
    description: [
      "Exceeding sales targets and developing ideas for customer entertainment",
      "Handling and organising cash, tickets and promotions",
      "Extra hours and support during peak periods such as Christmas and school holidays",
      "Efficient and fast teamwork as the daily role was high-paced and exciting"
    ],
    logo: "/images/merlin-entertainment-logo.webp"
  },
  {
    role: "Kitchen Chef/Barista",
    company: "Starbucks",
    duration: "Sep 2014 - Jul 2015 · 11 mos",
    description: [
      "Working to Starbucks high standards as required",
      "Handling customer transactions while creating a positive atmosphere",
      "Preparing food and being knowledgeable with hygiene to ensure health and safety is the highest priority",
      "Working in events serving alcohol, food and providing high standard customer service"
    ],
    logo: "/images/starbucks-logo.webp"
  },
  {
    role: "Host",
    company: "Byron",
    duration: "Nov 2013 - Jul 2014 · 9 mos",
    description: [
      "Welcoming and entertaining guests in the biggest ticket-selling arena in the world",
      "Serving 100+ international customers daily",
      "Fixing issues with orders, unhappy customers and maintaining a positive atmosphere",
      "Chemical, food and health and safety certification"
    ],
    logo: "/images/byron-logo.webp"
  },
  {
    role: "Social Media Specialist",
    company: "Violet Darkling",
    duration: "",
    description: [
      "Maintaining and developing social and brand status through all social channels to create brand awareness, increase revenue, interest and customer acquisition",
      "Working with the design team, developing and improving content for both website & social",
      "Reporting back to stakeholders about brand progress"
    ],
    logo: "/images/violetdarkling.webp"
  },
  {
    role: "Bachelor's Degree, Digital Multimedia Technology",
    company: "University",
    duration: "July 2012 - July 2015",
    description: [
      "Theoretical understanding and practical experience of designing, constructing, and developing digital media applications",
      "Visual design, animation, creative and logical thinking, and interface design.",
      "Webpage design and creation with HTML, CSS and Javascript",
      "Technical product planning and implementation using single-board computers"
    ],
    logo: "/images/university-logo.webp"
  },
  {
    role: "Computer Aided Drafting and Design",
    company: "Adam Smith College",
    duration: "2010 - 2011",
    description: [
      "Creating designs and schematics in a software environment used to manufacture products",
      "3D surface and solid modelling",
      "Architectural CADT Principles and Practice",
      "Design methodology"
    ],
    logo: "/images/adamsmithcollege.png"
  },
  {
    role: "Social Media",
    company: "",
    duration: "2008 - 2011",
    description: [
      "Gain and maintain social media following of 500,000+",
      "Edit, create and update social posts using Adobe Photoshop",
      "Sourcing brands/products for affiliate marketing"
    ],
    logo: "/images/social-media-logo.webp"
  },
  {
    role: "Portable Salesman",
    company: "",
    duration: "2007 - 2008",
    description: [
      "Sales role focused on customer retention and providing unattainable goods",
      "Stock Management and quality control",
      "Sourcing and delivery of goods"
    ],
    logo: "/images/salesicon.png"
  }
];

const WhatIDo = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Where and who have I worked with?
            </h1>
            <p className="text-lg text-gray-700">
              Below is all of my experience, from age 13 to 28. You will find I
              have a varied range of experience which includes Frontend
              Development, Marketing, Sales, SEO, CRM, Email and many more.
            </p>
          </div>
        </section>

        <section>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start mb-12"
            >
              <div className="md:w-1/3 mb-4 md:mb-0">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="work-logo w-40 h-auto mx-auto md:mx-0"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <p className="text-gray-500 mb-2">{exp.duration}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
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
  );
};

export default WhatIDo;
