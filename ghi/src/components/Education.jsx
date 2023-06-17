import React from "react";
import EducationItem from "./EducationItem";

const data = [
    {
        year: 2023,
        school: 'Hack Reactor',
        description: 'Advanced Software Engineering'
    },
    {
        year: 2022,
        school: 'Lingoda GmbH',
        description: 'German Language, Literature & Translation'
    },
    {
        year: 2016,
        school: 'Buffalo State University',
        description: 'Bachelor of Science in Business Administration'
    },
]

const Education = () => {
    return (
        <div id='education' className='max-w[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#0015be]'>
                Education
            </h1>
            {data.map((item, idx)=>(
                <EducationItem key={idx} year={item.year} school={item.school} description={item.description} />
            ))}
        </div>
    )
}


export default Education;
