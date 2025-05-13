import React, {useState} from 'react';
import { Flex, Layout } from 'antd';
import AppHeader from "./components/layout/AppHeader.jsx";
import AppContend from "./components/layout/AppContend.jsx";
import Experience from "./components/sections/Experience.jsx";
import Projects from "./components/sections/Projects.jsx";
import Contact from "./components/sections/Contact.jsx";



export default function App() {
    const [tab,setTab] = useState('main')

return(
    <Layout>
      <AppHeader active={tab} onChange={(current)=> setTab(current)}/>
        <Layout>
            {tab === 'main' && <AppContend />}
            {tab === 'experience'&& <Experience/> }
            {tab === 'projects' && <Projects />}
            {tab === 'contact' && <Contact />}
        </Layout>
    </Layout>
)
}
