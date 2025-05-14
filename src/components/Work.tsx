import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const workItems = [
  {
    title: "Portfolio",
    subtitle: "3D Web Design",
    tools: "JavaScript, TypeScript, React, Three.js",
    image: "/images/web1.png",
    Link: "https://www.cnydev.dev/"
  },
  {
    "title": "LittleLemon",
    "subtitle": "App",
    "tools": "Django, MySQL, JWT, React",
    "image": "/images/LittleLemon.png",
    Link: "https://github.com/CYECHARLA/LittleLemon.git",
  },
  {
    title: "MyPortfolio",
    subtitle: "Boostrap Portfolio",
    tools: "HTML, CSS, JavaScript, Bootstrap",
    image: "/images/portfolio.png",
    Link: "https://cyecharla.github.io/ChalamYecharla.github.io/",
  },
  {
    title: "StudyBud App",
    subtitle: "Study Group Management",
    tools: "Python, Django, PostgreSQL, REST API",
    image: "/images/StudyBud.png",  
    Link: "https://studybud-ljnp.onrender.com",  
  },
  {
    title: "Air Traffic Control Prediction",
    subtitle: "AI/ML for Air Traffic Control",
    tools: "Python, Machine Learning, AI",
    image: "/images/Flight_delay.png", 
  },
  {
    title: "Kitchen Genie",
    subtitle: "Android App for Home Cooks",
    tools: "Java, Android Studio, Firebase",
    image: "/images/kitchen_genie.png", 
  },
];

const Work = () => {
  useGSAP(() => {
    const box = document.getElementsByClassName("work-box");
    const container = document.querySelector(".work-container");
    let translateX = 0;

    function setTranslateX() {
      if (!box.length || !container) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(
        window.getComputedStyle(box[0]).paddingLeft || "0"
      );
      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    // Delay to ensure images are loaded
    setTimeout(() => {
      setTranslateX();
      ScrollTrigger.refresh();

      gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
          id: "work",
        },
      }).to(".work-flex", {
        x: () => -translateX,
        duration: 1,
        ease: "none",
      });
    }, 100);
  }, []);

  // Debounced resize to recalculate translateX
  useEffect(() => {
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const event = new Event("resize-gsap");
        window.dispatchEvent(event);
        ScrollTrigger.refresh();
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workItems.map((item, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{item.tools}</p>
                <div className="project-links">
                  <a href={item.Link} target="_blank" rel="noopener noreferrer">LINK</a>
                </div>
              </div>
              <WorkImage image={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;