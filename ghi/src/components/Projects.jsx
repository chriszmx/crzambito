import React from 'react'
import ProjectItem from "./ProjectItem"
import ithink from '../assets/ithink.png'
import car from '../assets/carcar.png'
import fjz from '../assets/fjz.png'
import studio from '../assets/studio16.png'

const projectList = [
    {
        img: ithink,
        title: 'iThink',
        tools: ['React', 'MongoDB', 'FastAPI', 'Python', 'JavaScript', 'TailWindCSS'],
        description: 'Using generative AI to help brainstorm ideas.',
        url: 'https://gitlab.com/binary-bandits/i-think'
    },
    {
        img: car,
        title: 'CarCar',
        tools: ['React', 'React Native', 'Django', 'Python', 'JavaScript', 'BootStrap'],
        description: 'Your one stop shop for sales, inventory and service manager.',
        url: 'https://gitlab.com/c.r.zambito/project-beta'
    },
    {
        img: fjz,
        title: 'FJZ LLC',
        tools: ['React', 'TailWindCSS', 'Firebase', 'Vite'],
        description: 'Tenant management services.',
        url: 'https://gitlab.com/c.r.zambito/fjz'
    },
    {
        img: studio,
        title: 'Studio 16 Task Manager',
        tools: ['Django', 'CSS', 'Python', 'PostgreSQLite'],
        description: 'Studio 16 Group Task Manager',
        url: 'https://gitlab.com/team-163974311/studio-16-task-manager'
    },


]

const Projects = () => {
    return (
        <div id='projects' className='max-w[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                Personal Projects
            </p>
            <div className='grid sm:grid-cols-2 gap 12'>
                {projectList.map(project => (
                    <ProjectItem key={project.title} {...project} />
                ))}
            </div>
        </div>
    )
}

export default Projects







// import React from 'react'
// import ProjectItem from "./ProjectItem"
// import propertyImg from '../assets/butter.jpg'
// import ithink from '../assets/ithink.png'
// import car from '../assets/carcar.png'
// import fjz from '../assets/fjz.png'

// const Projects = () => {
//     return (
//         <div id='projects' className='max-w[1040px] m-auto md:pl-20 p-4 py-16'>
//             <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
//             <p className='text-center py-8'>
//                 Personal Projects
//             </p>
//             <div className='grid sm:grid-cols-2 gap 12'>
//                 <ProjectItem img={ithink} title='iThink'/>
//                 <ProjectItem img={car} title='CarCar'/>
//                 <ProjectItem img={fjz} title='FJZ LLC'/>
//                 <ProjectItem img={propertyImg} title='title of app4'/>
//             </div>
//         </div>
//     )
// }

// export default Projects
