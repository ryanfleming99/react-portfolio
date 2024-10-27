const ScrollButton = ({ targetId, children }) => {
  const scrollToSection = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className=" py-8 text-6xl drop-shadow-lg animate-bounce"
      onClick={scrollToSection}
    >
      {children}
    </button>
  );
};

export default ScrollButton;
