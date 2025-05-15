import {Layout, theme} from "antd";
import React, {useState} from "react";
import classes from'./AppHeader.module.css'

import {UserOutlined} from "@ant-design/icons";
import Modal from "../sections/Modal.jsx";




export default function AppHeader ({active,onChange}){
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);  // Управление отображением формы логина/регистрации


    // Начальные значения для формы регистрации
    const [regData, setRegData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
    });

    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const openLogin = () => {
        setIsLogin(true);
        setIsOpen(true);
        resetRegistrationForm();
    };

    const resetRegistrationForm = () => {
        setRegData({
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
        });
        setPasswordMismatch(false);
    };

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegData((prev) => ({
            ...prev,
            [name]: value || "", // Всегда строка
        }));

        if (name === "confirmPassword" || name === "password") {
            setPasswordMismatch(false);
        }
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        if (regData.password !== regData.confirmPassword) {
            setPasswordMismatch(true);
            return;
        }

        console.log("✅ Успешная регистрация:", regData);
        setIsOpen(false);
        resetRegistrationForm();
    };

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
                <>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    {isLogin ? (
                    <form className="login" onSubmit={(e) => e.preventDefault()}>
                    <p>Login</p>
                    <label>Username:</label>
                    <input type= "text" name="username" required /><br/>
                    <label>Password:</label>
                    <input type="password" name="password"/><br/>
                    <button type="submit"> Login</button><br/>
                    <button type="button" onClick={() => { setIsLogin(false); resetRegistrationForm(); }}> = Registration =</button><br/>
                    </form >
                    ) : (
                    <form className="registration" onSubmit={handleRegisterSubmit}>
                        <p>Registration</p>
                    <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={regData.username}
                            onChange={handleRegisterChange}
                            required
                    /><br/>
                    <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={regData.password}
                            onChange={handleRegisterChange}
                            required
                    /><br/>
                    <label>Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={regData.confirmPassword}
                            onChange={handleRegisterChange}
                            required
                            style={{
                                border: passwordMismatch ? "2px solid red" : "1px solid #ccc",
                            }}
                    /><br/>
                    <label>- Email - :</label>
                        <input
                            type="email"
                            name="email"
                            value={regData.email}
                            onChange={handleRegisterChange}
                            required
                        /><br/>
                    <button type="submit" > = Registration =</button><br/>
                            <button type="button" onClick={() => { setIsLogin(true); resetRegistrationForm(); }}> Login</button>
                    </form>
                    )}
                </Modal>
                    </>
            </div>



        </Layout.Header>
    )
}