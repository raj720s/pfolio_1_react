import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./about.scss";
import images from "../../constants/images";
import { client, urlFor } from "../../client";

function About() {
  const [abouts, setAbouts] = useState([]);
  // const abouts = [
  //   {
  //     title: "web dev",
  //     description: "im a expert noob",
  //     imgUrl: images.about01,
  //   },
  //   {
  //     title: "react dev",
  //     description: "im a expert noob",
  //     imgUrl: images.about02,
  //   },
  //   {
  //     title: "Next dev",
  //     description: "im a expert noob",
  //     imgUrl: images.about03,
  //   },
  //   {
  //     title: "react-native dev",
  //     description: "im a expert noob",
  //     imgUrl: images.about04,
  //   },
  // ];

  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good reputation</span>
      </h2>

      <h2 className="explore">Explore...</h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(About, "about");
