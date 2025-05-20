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
        resetForms();
    };

    const resetForms = () => {
        setLoginData({ username: "", password: "" });
        setRegData({
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
        });
        setPasswordMismatch(false);
    };

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

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

        console.log("Успешная регистрация:", regData);
        setIsOpen(false);
        resetRegistrationForm();
    };
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const loginPayload = {
            username: loginData.username,
            password: loginData.password,
        };

        console.log("Login данные:", loginPayload);

        setIsOpen(false);
        resetForms();
    };

    return(


        <Layout.Header className={classes.headerStyle} >
            <div className={classes.headerText}>
                <h1>Nikita Molodkin</h1>
            </div>
            <h4 className={classes.infoText}>
                Full-stack developer
            </h4>
                    <button className={`${classes.button} ${active === 'main' ? classes.active : ''}`}
                            onClick={() => onChange('main')}>Main</button>
                    <button   className={`${classes.button} ${active === 'experience' ? classes.active : ''}`}
                              onClick={() => onChange('experience')} >About</button>
                    <button className={`${classes.button} ${active === 'projects' ? classes.active : ''}`}
                            onClick={() => onChange('projects')}>Projects</button>
                    <button className={`${classes.button} ${active === 'contact' ? classes.active : ''}`}
                            onClick={() => onChange('contact')}
                    >Blog</button>
            <div className={classes.headerLineStyle} ></div>
            <button onClick={() => setIsOpen(true)} className={classes.log}> Log In <UserOutlined className={classes.login} /> </button>

            <div style={{ padding: "20px" }}>
                <>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    {isLogin ? (
                    <form className="login" onSubmit={handleLoginSubmit}>
                    <p>Login</p>
                    <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={loginData.username}
                            onChange={handleLoginChange}
                            required
                        /><br/>
                    <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleLoginChange}
                            required
                        /><br/>
                    <button type="submit"> Login</button><br/>
                        <button type="button" onClick={() => { setIsLogin(false); resetForms(); }}> = Registration =</button><br/>
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
                                border: passwordMismatch ? "2px solid red" : "1px solid rgba(11,50,43,1)",
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