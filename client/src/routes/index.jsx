
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Services from '../pages/Services';
import Blog from "../pages/Blog"
import Contact from '../pages/Contact';
import TalkToSales from '../pages/TalkToSales';
import AskHr from '../pages/AskHr';
import PortFolioPreview from '../pages/Services-turtl';
import ServiceCategory from '../pages/ServiceCategory';
import BlogPreview from '../pages/BlogPreview';
import FAQ from '../pages/FAQ';


const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/services" element={<Services/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:slug" element={<BlogPreview/>} />
            <Route path="/contact" element={<Contact/>} />
           <Route path="/sales" element={<TalkToSales/>}/>
           <Route path="/faq" element={<FAQ/>}/>
           <Route path="/services/service_category/:slug" element={<ServiceCategory/>}/>
           <Route path="/services/portfolio/:slug" element={<PortFolioPreview/>}/>
        </Routes>
    </div>
  )
}

export default MainRoute