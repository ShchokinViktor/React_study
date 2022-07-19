import {Routes, Route} from 'react-router-dom';

import Hero from './pages/Hero';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';

import Layout from './layouts/Layout';

function App () {
    return (
    <>
        <Routes>
            <Route path='/' element = {<Layout/>}>
                <Route index element ={<Hero />}/>
                <Route path="skills" element ={<Skills />}/>
                <Route path="portfolio" element ={<Portfolio />}/>
            </Route>
        </Routes>
    </>
    )
}

export default App;