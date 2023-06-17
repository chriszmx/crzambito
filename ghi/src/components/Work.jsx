import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        title: 'title',
        details: 'sample detail'
    },
    {
        year: 2021,
        title: 'title',
        details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
    },
    {
        year: 2022,
        title: 'title',
        details: 'sample detail'
    },
    {
        year: 2023,
        title: 'title',
        details: 'sample detail'
    }
]

const Work = () => {
    return (
        <div id='work' className='max-w[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#0015be]'>
                Experience
            </h1>
            {data.map((item, idx)=>(
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.details} />
            ))}
        </div>
    )
}

export default Work
