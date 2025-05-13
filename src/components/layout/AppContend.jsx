import {Image, Layout} from "antd";
import React, {useState} from "react";
import classes from './AppContend.module.css'
import Modal from "../sections/Modal.jsx";


const fotoArt ={

}


export default function AppContend(){
    const [isOpen, setIsOpen] = useState(false);
    return(

        <Layout.Content>
            <img className={classes.fotoStyle} src="/assets/foto2.jpg"/>
            <div className={classes.contendText} >
            <h1>Nikita Molodkin <br/>
                Full-stack developer
            </h1>

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

            <div className={classes.greenLine}></div>


        </Layout.Content>
    )
}