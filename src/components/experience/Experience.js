import React from "react";
import "./experience.css";
import { BsCheckCircleFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="services">
      <h2>My Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3> UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Developed high-performing, scalable React application following
                best practices.
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Worked closely with UX designers to create seamless user
                experiences across multiple devices.
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Collaborated with cross-functional teams to deliver high-quality
                application for our customers.
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Leveraged React Hooks to manage state and side effects in a
                clean and efficient manner, greatly simplifying the code and
                improving overall application performance.
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Effectively centralizing data management and providing a
                streamlined and efficient way to pass data between components
                without the need for prop drilling, utilizing React Context API.
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Implemented React Router to manage navigation and routing
                between different pages and components, with a focus on
                accessibility and user experience.
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Utilized advanced JavaScript concepts such as asynchronous
                programming and closures to optimize application performance.
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Utilized Jest for unit testing of React components, ensuring
                high-quality and reliable code.
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Implemented A/B testing to analyze data to optimize user
                experience and drive business results.
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Utilized feature flags for progressive delivery and controlled
                rollouts of new features.
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Mentored and provided leadership to new joiners, sharing
                knowledge and best practices, and fostering a positive and
                productive team culture, utilizing best practices for code
                reviews and code standards.
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Documented projects, ensuring clear and effective communication
                of project details and technical specifications to team members
                and stakeholders.
              </p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        {/* <article className="service">
          <div className="service__head">
            <h3> Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eius ex fuga nobis
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eius ex fuga nobis
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eius ex fuga nobis
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eius ex fuga nobis
              </p>
            </li>
          </ul>
        </article> */}
        {/* Web Development */}
        {/* <article className="service">
          <div className="service__head">
            <h3> Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eius ex fuga nobis
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eius ex fuga nobis
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eius ex fuga nobis
              </p>
            </li>
            <li>
              <BsCheckCircleFill className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eius ex fuga nobis
              </p>
            </li>
          </ul>
        </article>  */}

        {/* End content creation*/}
      </div>
    </section>
  );
};

export default Experience;
