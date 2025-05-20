import classes from './About.module.css'
import React from "react";

export default function About (){
   return (
       <div>

                <div className={classes.greenLine}>
                    <img className={classes.fotoStyle} src="/assets/foto3.jpg"/>
                    <h2 className={classes.titleH2}>About me</h2>

                    <p className={classes.textAbout}>
                        I am a positive and motivated Full-stack developer
                        with a strong desire to learn and grow.
                        I excel at teamwork, problem-solving,
                        and creating efficient, high-quality code.
                        I am always eager to explore new technologies
                        and improve my skills.
                        My ability to collaborate effectively allows
                        me to contribute to innovative and successful projects.
                    </p>

                </div>

       </div>
   )

}