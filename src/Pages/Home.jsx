import React from 'react'
import Slider from '../Components/home/Slider'
import Featured from '../Components/home/Featured'
import AboutUs from '../Components/home/AboutUs'
import TredingCourses from '../Components/home/TredingCourses'
import OurTeam from '../Components/home/OurTeam'
import Testimonials from '../Components/home/Testimonials'


const Home = () => {
    return (
        <div className='overflow-x-hidden' >
            <Slider />
            <Featured />
            <AboutUs />
            <TredingCourses />
            <OurTeam />
            <Testimonials />      
        </div>
    )
}

export default Home
