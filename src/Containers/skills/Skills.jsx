import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { client, urlFor } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import "./skills.scss";
import MotionWrap from "../../wrapper/MotionWrap";
function Skills() {
  const [exp, setExp] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const qry = '*[_type=="experiences"]';
    const skillsQry = '*[_type=="skills"]';
    client.fetch(qry).then((dta) => {
      setExp(dta);
    });
    client.fetch(skillsQry).then((dta) => {
      setSkills(dta);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills &&
            skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          <div>my skills</div>
        </motion.div>

        <div className="app__skills-exp">
          {exp.map((ex) => (
            <motion.div className="app__skills-exp-item" key={ex.year}>
              <div
                className="app__skills-exp-year"
                key={ex.year + Math.random()}
              >
                <p className="bold-text">{ex.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {ex.works.map((wrk) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={wrk.name}
                      key={wrk.name}
                    >
                      <h4 className="bold-text">{wrk.name}</h4>
                      <p className="p-text">{wrk.company}</p>
                      <ReactTooltip
                        id={wrk.name}
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                        key={wrk.name}
                      >
                        {wrk.desc}
                      </ReactTooltip>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills");
