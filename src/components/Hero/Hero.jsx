import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
// import profile from "../../assets/profile.jpg"
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Utkarsh.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            No Errors
            <br />
            Just pure functionality
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="/person3.png" alt="" />
        </motion.div>
   
        <a className={css.email} href="mailto: utkarshshrivastava2106@gmail.com">
          utkarshshrivastava2106@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="secondaryText">
              <div>SOFTWARE DEVELOPER ENGINEER</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>PROFESSIONAL</span>
            <span>JAVA AND WEB DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;