import {Layout, theme} from "antd";
import React, {useState} from "react";
import classes from'./AppHeader.module.css'

import {UserOutlined} from "@ant-design/icons";
import Modal from "../sections/Modal.jsx";




export default function AppHeader ({active,onChange}){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <Layout.Header className={classes.headerStyle} >
            <div className={classes.headerText}>
                <h1>Nikita Molodkin</h1>
            </div>
            <h4 className={classes.infoText}>
                Full-stack developer
            </h4>
                    <button className={classes.button} isActiv={active==='main'} onClick={()=>onChange('main')}>Main</button>
                    <button className={classes.button}  isActiv={active==='experience'} onClick={()=>onChange('experience')} >Experience</button>
                    <button className={classes.button}  isActiv={active==='projects'} onClick={()=>onChange('projects')}>Projects</button>
                    <button className={classes.button}  isActiv={active==='contact'} onClick={()=>onChange('contact')}>Contact</button>
            <div className={classes.headerLineStyle} ></div>
            <button onClick={() => setIsOpen(true)} className={classes.log}> Log In <UserOutlined className={classes.login} /> </button>

            <div style={{ padding: "20px" }}>

                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>

                    <p>Login</p>
                    <label>Username:</label>
                    <input type="text"/><br/>
                    <label>Password:</label>
                    <input type="password"/><br/>
                    <button> Login</button><br/>
                    <button> = Registration =</button><br/>

                    <label>Username:</label>
                    <input type="text"/><br/>
                    <label>Password:</label>
                    <input type="password"/><br/>
                    <label>Password:</label>
                    <input type="password"/><br/>
                    <label>Email:</label>
                    <input type="text"/><br/>
                    <button> = Registration =</button>
                </Modal>
            </div>


        </Layout.Header>
    )
}