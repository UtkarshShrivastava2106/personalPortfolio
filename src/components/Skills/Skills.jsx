import React from "react";
import { motion } from "framer-motion";
import node from "../../assets/nodeOg.png"
import react from "../../assets/react.png"
import java from "../../assets/JavaOg.png"
import html from "../../assets/htmlOg.png"
import mysql from "../../assets/MysqlOg.png"
import mongo from "../../assets/mongoOg.png"
import css from "../Skills/Skills.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Skills</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src={java} alt="project"  />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src={html}alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src={react} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src={node} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src={mysql} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src={mongo} alt="project" /> <motion.img variants={fadeIn("up", "tween", .9, .6)} src={react} alt="project" />

        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;