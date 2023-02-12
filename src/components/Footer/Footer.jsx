import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`bg-primary paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:zainkeepscode@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Utkarsh Shrivastava </p><br/>
            <p>+91 7000657220</p><br/>
            <p>utkarshshrivastava2106@gmail.com</p><br/>
            <a className="links " href="https://www.linkedin.com/in/utkarsh-shrivastava-90459a1aa/">Linkedin</a><br /><a href="https://github.com/UtkarshShrivastava2106">GitHub</a>
            <br>
            </br><a href="https://drive.google.com/drive/my-drive">My Resume</a>
            <br/>
            <p>Ujjain, MP, India</p><br/>
          </div>
         
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;