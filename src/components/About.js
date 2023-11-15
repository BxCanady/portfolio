import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            "Hello, I'm Brandon Canady,
            a Full Stack MERN Developer with a passion for creating exceptional web experiences.
            I specialize in building elegant and responsive websites using cutting-edge technologies like React and Tailwind CSS. With a keen eye for design and a commitment to clean, efficient code,
            I bring creativity and expertise to every project.
            Let's collaborate to bring your ideas to life!"
          </p>


          <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>
          <p>
            Connect with me on{' '}
            <a
              href="https://github.com/BxCanady?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
            .
          </p>

        </div>

        <div className="about-img bg-primary p-4 rounded-lg">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="w-48 h-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
