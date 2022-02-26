import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import { motion } from "framer-motion";
import "./testimonials.scss";
function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const qry = '*[_type=="testimonials"]';
    const bqry = '*[_type=="brands"]';
    client.fetch(qry).then((dta) => {
      console.log("qry1", dta);
      setTestimonials(dta);
    });
    client.fetch(bqry).then((dta) => {
      // console.log("qry2", dta);
      setBrands(dta);
    });
    console.log(testimonials);
  }, [testimonials.length]);

  return (
    <>
      <h2 className="head-text">Testimonials</h2>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={urlFor(testimonials[currentIndex].imageurl)}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>

      {/* <h2 className="head-text">Testimonials</h2>
      {testimonials.length > 0 ? (
        <div className="testimonial-container">
          {testimonials.map((test) => {
            return (
              <>
                <div className="app__testimonial-item app__flex">
                  <img src={urlFor(test.imageurl)} alt={test.name} />
                  <div className="app__testimonial-content">
                    <p className="p-text">{test.feedback}</p>
                    <div>
                      <h4 className="bold-text">{test.name}</h4>
                      <h5 className="p-text">{test.company}</h5>
                    </div>
                  </div>
                </div>

                <div className="app__testimonial-btns app__flex">
                  <div
                    className="app__flex"
                    onClick={() =>
                      handleClick(
                        currentIndex === 0
                          ? testimonials.length - 1
                          : currentIndex - 1
                      )
                    }
                  >
                    <HiChevronLeft />
                  </div>

                  <div
                    className="app__flex"
                    onClick={() =>
                      handleClick(
                        currentIndex === testimonials.length - 1
                          ? 0
                          : currentIndex + 1
                      )
                    }
                  >
                    <HiChevronRight />
                  </div>
                </div>

                <div className="app__testimonial-brands app__flex">
                  {brands &&
                    brands.map((brand) => (
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: "tween" }}
                        key={brand._id}
                      >
                        <img src={urlFor(brand.imgUrl)} alt={brand.name} />
                      </motion.div>
                    ))}
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div>
          <p>stay tuned for testimonials</p>
        </div>
      )} */}
    </>
  );
}

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
