import React, {useState} from 'react';
import { Flex, Layout } from 'antd';
import AppHeader from "./components/layout/AppHeader.jsx";
import AppContend from "./components/layout/AppContend.jsx";
import About from "./components/sections/About.jsx";
import Projects from "./components/sections/Projects.jsx";
import Blog from "./components/sections/Blog.jsx";



export default function App() {
    const [tab,setTab] = useState('main')

return(
    <Layout>
      <AppHeader active={tab} onChange={(current)=> setTab(current)}/>
        <Layout>
            {tab === 'main' && <AppContend />}
            {tab === 'experience'&& <About/> }
            {tab === 'projects' && <Projects />}
            {tab === 'contact' && <Blog />}
        </Layout>
    </Layout>
)
}
