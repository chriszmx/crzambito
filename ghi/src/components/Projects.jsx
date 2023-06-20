import React from 'react'
import ProjectItem from "./ProjectItem"
import propertyImg from '../assets/butter.jpg'
import ithink from '../assets/ithink.png'
import car from '../assets/carcar.png'
import fjz from '../assets/fjz.png'

const Projects = () => {
    return (
        <div id='projects' className='max-w[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit neque id excepturi saepe veritatis minus deserunt ullam numquam, repellendus aliquid mollitia eligendi amet dolores sunt dolorem! Dicta possimus animi natus!
            </p>
            <div className='grid sm:grid-cols-2 gap 12'>
                <ProjectItem img={ithink} title='title of app1'/>
                <ProjectItem img={car} title='title of app2'/>
                <ProjectItem img={fjz} title='title of app3'/>
                <ProjectItem img={propertyImg} title='title of app4'/>
            </div>
        </div>
    )
}

export default Projects
